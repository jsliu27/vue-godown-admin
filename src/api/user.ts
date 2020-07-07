import request from '@/axios';
const base: string = '';

// 用户登录
export const userLogin = (params: object) => request.post(`${base}/user/login`);
// 获取人员列表
export const userListData = () => request.get(`${base}/user/list`);
// 添加人员
export const addUserInfo = (params: object) => request.post(`${base}/user/add`);
