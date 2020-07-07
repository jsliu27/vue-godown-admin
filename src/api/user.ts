import request from '@/axios';
const base: string = '';

export const userListData = () => request.get(`${base}/user/list`);
