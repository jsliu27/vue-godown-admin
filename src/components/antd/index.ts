import Vue from 'vue';
import {
  Layout,
  Menu,
  Icon,
  Button,

} from 'ant-design-vue';

// 布局
Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
// 菜单栏
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
// 图标
Vue.component(Icon.name, Icon);
// 按钮
Vue.component(Button.name, Button);
