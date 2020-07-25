import axios from "axios";
import {ApiConfig, Error} from './helpers/constants';

export const createAPI = () => {
  const api = axios.create({
    baseURL: ApiConfig.URL,
    timeout: ApiConfig.TIMEOUT,
    withCredentials: ApiConfig.COOKIES,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (error) => {
    const {response} = error;

    if (response.status === Error.UNAUTHORIZED) {
      // onUnauthorized();

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
