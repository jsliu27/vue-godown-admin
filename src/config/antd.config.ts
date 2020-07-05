import Vue from 'vue';
import {
  Layout,
  Menu,
  Icon,
  Button,
  Result,
} from 'ant-design-vue';

// 布局
Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);

// 菜单栏
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
// 图标
Vue.component(Icon.name, Icon);
// 按钮
Vue.component(Button.name, Button);
// 结果
Vue.component(Result.name, Result);
