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

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      // onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
