import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入antd组件
import './config/antd.config';
// 引入echart按需加载
import './config/echart.config';
// 引入全局样式
import './assets/styles/common.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
