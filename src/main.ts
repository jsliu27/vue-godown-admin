import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入antd组件
import './components/antd/index';
// 引入echart按需加载
import './config/echart.config';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
