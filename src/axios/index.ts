import axios from 'axios';
// 拦截器
import { Interceptors } from './interceptors';
// 请求方式
import metheds from './metheds';
// import
class Service {
  private instance: any;
  constructor() {
    // 创建axios实例
    this.instance = axios.create({
      baseURL: process.env.VUE_APP_CURENV,
      timeout: 3000,
    });
    this.instance = new Interceptors(this.instance).get();
    this.instance = metheds(this.instance);
  }
  public get() {
    return this.instance;
  }
}

export default new Service().get();
