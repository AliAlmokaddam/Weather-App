/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import urlJoin from "url-join";
import {baseApiURL} from "../Constants";
import { notifier } from "../Utils/notifier";
import { ResponseStatus } from "../Enums/ResponseStatus";
import {isEmpty} from "lodash";
import {ApiConfig} from "@/Core/API/APIService.ts";

export interface IBaseApiResponse<T> {
  data: T;
}

export default class ApiProvider {
  api: AxiosInstance;

  constructor(config: ApiConfig) {
    this.api = axios.create({
      ...config,
      baseURL: urlJoin(`${config.mainUrl ?? baseApiURL}`, `${config.baseURL}`),
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.api.interceptors.request.use((req: any) => {
      return {
        ...req,
        params: {
          ...req.params
        },
        headers: {
          ...req.headers,
        },
      };
    });

    this.api.interceptors.response.use(
      (res: AxiosResponse) => res.data,
      async (error: any) => {
        if (error?.response?.data?.message) {
          notifier(error?.response?.data?.message, ResponseStatus.error);
        } else if (!isEmpty(error?.message)) {
          notifier(error?.message, ResponseStatus.error);
        }
        return Promise.reject(error);
      },
    );
  }

  async request<T>(config: AxiosRequestConfig): Promise<any> {
    return await this.api.request<IBaseApiResponse<T>>(config);
  }
}
