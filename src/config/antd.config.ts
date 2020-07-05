import Vue from 'vue';
import {
  Layout,
  Menu,
  Icon,
  Button,
  Result,
  Form,
  Input,
  Checkbox,
  Dropdown,
  Avatar,
  message,
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
// 表单
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
// 输入框
Vue.component(Input.name, Input);
// 复选框
Vue.component(Checkbox.name, Checkbox);
// 下拉框
Vue.component(Dropdown.name, Dropdown);
// 头像
Vue.component(Avatar.name, Avatar);
// 全局提示
Vue.prototype.$message = message;
