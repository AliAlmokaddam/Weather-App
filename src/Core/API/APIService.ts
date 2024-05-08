import { HttpMethod } from '../Enums/HttpMethod';
import ApiProvider from './APIProvider';
import { AxiosRequestConfig } from 'axios';

export type ApiConfig = AxiosRequestConfig & { mainUrl?: string }

export default class ApiService {
  provider: ApiProvider;

  constructor(config: ApiConfig) {
    this.provider = new ApiProvider(config);
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.GET;
    return this.provider.request({ method, url, ...config });
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.DELETE;
    return this.provider.request({ method, url, ...config });
  }

  post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.POST;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }

  put<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.PUT;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }

  patch<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const method = HttpMethod.PATCH;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }
}
