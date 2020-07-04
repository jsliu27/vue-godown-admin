import request from '@/axios';
const base: string = '/api';

export const userListData = () => request.get(`${base}/user/list`);
