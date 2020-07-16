import request from '@/axios';
const base: string = '';

// 商品列表
export const productList = (params: object) => request.get(`${base}/product/list`, params);

