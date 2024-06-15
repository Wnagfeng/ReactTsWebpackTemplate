/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
export interface JoonInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
  requestFailureFn?: (err: unknown) => unknown
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface JoonRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: JoonInterceptors<T>
}

export interface JoonRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: JoonInterceptors<T>
}
