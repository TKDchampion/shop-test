import fetchInstance from "./fetch-instance";
import { ApiConfig } from "./model";

export default class BaseServices {
  get = async <T>(apiconfig: ApiConfig): Promise<T> => {
    return getCall<T>(apiconfig);
  };

  post = async <T>(apiconfig: ApiConfig): Promise<T> => {
    return postCall<T>(apiconfig);
  };

  put = async <T>(apiconfig: ApiConfig): Promise<T> => {
    return putCall<T>(apiconfig);
  };

  delete = async <T>(apiconfig: ApiConfig): Promise<T> => {
    return deleteCall<T>(apiconfig);
  };
}

const getCall = async <T>(apiconfig: ApiConfig): Promise<T> => {
  return fetchInstance<T>(apiconfig, "GET", apiconfig.renderType);
};

const postCall = async <T>(apiconfig: ApiConfig): Promise<T> => {
  return fetchInstance<T>(apiconfig, "POST");
};

const putCall = async <T>(apiconfig: ApiConfig): Promise<T> => {
  return fetchInstance<T>(apiconfig, "PUT");
};

const deleteCall = async <T>(apiconfig: ApiConfig): Promise<T> => {
  return fetchInstance<T>(apiconfig, "DELETE");
};
