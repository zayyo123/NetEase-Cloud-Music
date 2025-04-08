import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
  InternalAxiosRequestConfig
} from 'axios'

// 请求拦截器接口定义
interface RequestInterceptors {
  success?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
  failure?: (error: any) => Promise<any>
}

// 响应拦截器接口定义
interface ResponseInterceptors {
  success?: <T = any>(
    response: AxiosResponse<T>
  ) => T | AxiosResponse<T> | Promise<T | AxiosResponse<T>>
  failure?: (error: AxiosError) => Promise<any>
}

// 拦截器集合接口
interface Interceptors {
  request?: RequestInterceptors
  response?: ResponseInterceptors
}

// 扩展请求配置接口，添加自定义拦截器
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptors
}

/**
 * 请求类：封装Axios实现统一的HTTP请求处理
 */
class Request {
  instance: AxiosInstance
  private cancelTokenSource: CancelTokenSource

  /**
   * 构造函数
   * @param config - 请求配置
   */
  constructor(config: RequestConfig) {
    // 创建Axios实例
    this.instance = axios.create(config)
    // 初始化取消令牌源
    this.cancelTokenSource = axios.CancelToken.source()

    // 初始化拦截器
    this.initDefaultInterceptors()
    this.addCustomInterceptors(config)
  }

  /**
   * 初始化默认拦截器
   */
  private initDefaultInterceptors(): void {
    // 默认请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 这里可以添加默认请求头、认证令牌等
        return config
      },
      (error: AxiosError) => {
        console.error('默认请求拦截器错误:', error)
        return Promise.reject(error)
      }
    )

    // 默认响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 默认直接返回响应数据
        return response.data
      },
      (error: AxiosError) => {
        // 集中处理错误
        if (error.response) {
          // 服务器返回了非2xx状态码
          console.error(`服务器错误: ${error.response.status}`, error.response.data)
        } else if (error.request) {
          // 请求已发送但未收到响应
          console.error('网络错误: 未收到响应', error.request)
        } else {
          // 请求配置错误
          console.error('请求配置错误:', error.message)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
   * 添加自定义拦截器
   * @param config - 包含拦截器配置的请求配置
   */
  private addCustomInterceptors(config: RequestConfig): void {
    const { interceptors } = config

    // 实例级别请求拦截器
    if (interceptors?.request) {
      this.instance.interceptors.request.use(
        interceptors.request.success,
        interceptors.request.failure
      )
    }

    // 实例级别响应拦截器
    if (interceptors?.response) {
      this.instance.interceptors.response.use(
        interceptors.response.success,
        interceptors.response.failure
      )
    }
  }

  /**
   * 核心请求方法
   * @param config - 请求配置
   * @returns 返回请求结果的Promise
   */
  request<T = any>(config: RequestConfig): Promise<T> {
    // 应用请求取消令牌
    const mergedConfig: AxiosRequestConfig = {
      ...config,
      cancelToken: this.cancelTokenSource.token
    }

    // 单个请求的拦截器处理需要在实际请求前应用
    // 注意：由于类型兼容性问题，这里不再直接修改配置
    // 而是让拦截器在请求实例级别生效

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(mergedConfig)
        .then(response => {
          // 直接返回响应
          // 注意：由于上面已经应用了响应拦截器，这里不需要再处理
          resolve(response as T)
        })
        .catch((error: AxiosError) => {
          // 检查请求是否被取消
          if (axios.isCancel(error)) {
            console.log('请求已取消:', error.message)
          }
          reject(error)
        })
    })
  }

  /**
   * 取消所有待处理的请求
   * @param message - 取消原因消息
   */
  cancelAllRequests(message = '用户取消请求'): void {
    this.cancelTokenSource.cancel(message)
    // 为未来的请求生成新的取消令牌
    this.cancelTokenSource = axios.CancelToken.source()
  }

  /**
   * GET请求方法
   * @param config - 请求配置
   * @returns 返回请求结果
   */
  get<T = any>(config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  /**
   * POST请求方法
   * @param url - 请求URL
   * @param data - 请求数据
   * @param config - 请求配置
   * @returns 返回请求结果
   */
  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST', url, data })
  }

  /**
   * PUT请求方法
   * @param url - 请求URL
   * @param data - 请求数据
   * @param config - 请求配置
   * @returns 返回请求结果
   */
  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT', url, data })
  }

  /**
   * DELETE请求方法
   * @param url - 请求URL
   * @param config - 请求配置
   * @returns 返回请求结果
   */
  delete<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE', url })
  }

  /**
   * PATCH请求方法
   * @param url - 请求URL
   * @param data - 请求数据
   * @param config - 请求配置
   * @returns 返回请求结果
   */
  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH', url, data })
  }

  /**
   * 文件上传方法（带进度监控）
   * @param url - 上传URL
   * @param formData - 表单数据
   * @param config - 请求配置
   * @returns 返回上传结果
   */
  upload<T = any>(url: string, formData: FormData, config?: RequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST',
      url,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...(config?.headers || {})
      },
      onUploadProgress: config?.onUploadProgress
    })
  }

  /**
   * 设置自定义适配器（用于测试/模拟）
   * @param adapter - 自定义适配器
   */
  setAdapter(adapter: AxiosRequestConfig['adapter']): void {
    this.instance.defaults.adapter = adapter
  }

  /**
   * 并行处理多个请求
   * @param promises - 请求Promise数组
   * @returns 返回所有请求结果的数组
   */
  static all<T>(promises: Array<Promise<T>>): Promise<T[]> {
    return axios.all(promises)
  }

  /**
   * 展开响应结果数组为单独参数
   * @param callback - 回调函数
   * @returns 返回处理函数
   */
  static spread<T, R>(callback: (...args: T[]) => R): (arr: T[]) => R {
    return axios.spread(callback)
  }
}

export default Request
