
export class Interceptors {
  // 声明变量
  private instance: any ;
  // 构造函数
  constructor(instance: any) {
    // 获取到axios存储到变量中
    this.instance = instance;
    // 给axios添加拦截器
    this.initInterceptors();
  }
  // 将添加好拦截器的axios返回
  public get() {
    return this.instance;
  }
  // 初始化拦截器
  private initInterceptors() {
    /**
     * 请求拦截器
     */
    this.instance.interceptors.request.use((config: any) => {
      // 从缓存中获取token
      const token = sessionStorage.getItem('token');
      if (token) {
        config.headers.token = token;
      }
      // todo 这里else的情况直接跳转登陆页面
      return config;
    }, (error: any) => {
      // 控制台打印错误
      console.log(error);
    });

    /**
     * 响应拦截器
     */
    this.instance.interceptors.response.use((res: any) => {
      // 解构res获取到需要的数据
      const { status, headers: { token } } = res;
      // 获取响应头的token并保存（如果后端接口请求一次就更新一下token。来延长用户的超时时间，我们就需要每次都保存token，如果你的项目没有这么做，那就不需要保存）
      if (token) {
        sessionStorage.setItem('token', token);
      }
      // 判断状态码是否成功
      if (status === 200) {
        // 成功 - 暴露响应体 ( 前端需要的数据后端添加到响应头里面了，直接返回res.data 不能获取到，所以返回res请求方式去判断需要什么数据 )
        return Promise.resolve(res);
      } else {
        // 失败 - 通知页面取消loading 将data数据返回，可以用message提示
        return Promise.reject(res.data);
      }
    }, (error: any) => {
      const { response } = error;
      // 有响应数据
      if (response) {
        return Promise.reject(response.data);
      } else {
        alert('网络链接异常，请稍后重试!');
      }
    });
  }
}
