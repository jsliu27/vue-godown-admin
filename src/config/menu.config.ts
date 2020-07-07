// meun 配置
export default [
  {
    icon: 'home',
    title: '首页',
    key: '/',
  },
  {
    icon: 'shopping',
    title: '商品',
    key: 'shop',
    children: [
      {
        title: '商品列表',
        key: '/shop',
      },
    ],
  },
  {
    icon: 'dollar',
    title: '订单',
    key: 'dollar',
    children: [
      {
        title: '订单列表',
        key: '/dollar',
      },
    ],
  },
  {
    icon: 'car',
    title: '物流',
    key: 'car',
    children: [
      {
        title: '物流列表',
        key: '/logistics',
      },
    ],
  },
  {
    icon: 'user',
    title: '用户',
    key: 'user',
    children: [
      {
        title: '用户列表',
        key: '/user',
      },
    ],
  },
  {
    icon: 'pie-chart',
    title: '统计',
    key: 'pie-chart',
    children: [
      {
        title: '流量统计',
        key: '/flow',
      },
      {
        title: '交易统计',
        key: '/transaction',
      },
    ],
  },
  // 管理
];
