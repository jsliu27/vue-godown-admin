export default function metheds(instance: any) {
  return {
    /**
     * get请求
     * @param url 请求的路径
     * @param params 请求的参数
     * @param config 请求的自定义配置
     */
    get<Promise>(url: string, params?: any, config: object = {}) {
      return new Promise((resolve, reject) => {
        instance.get(url, {
          params,
          ...config,
        }).then((response: any) => {
          resolve(response.data);
        }).catch((error: any) => {
          reject(error);
        });
      });
    },
    /**
     * post请求
     * @param url 请求的路径
     * @param params 请求的参数
     * @param config 请求的自定义配置
     */
    post(url: string, params?: any, config: object = {}) {
      return new Promise((resolve, reject) => {
        instance.post(url, params, config).then((response: any) => {
          resolve(response.data);
        }).catch((error: any) => {
          reject(error);
        });
      });
    },
  };
}
