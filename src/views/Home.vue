<template>
  <a-layout id="home">
      <a-layout-sider>
        <div class="logo" />
        <a-menu
          v-model="selectKeys"
          :openKeys.sync='openkeys'
          mode="inline"
          theme="dark"
        >
          <template v-for="item in menuList">
            <a-sub-menu v-if="item.children" :key="item.key">
              <span slot="title">
                <a-icon :type="item.icon" />
                <span>{{item.title}}</span>
              </span>

              <a-menu-item
                v-for="subItem in item.children"
                :key="subItem.key"
              >
                <a :href="'#' + subItem.key">{{subItem.title}}</a>
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :key="item.key">
              <a :href="'#' + item.key">
                <a-icon :type="item.icon" />
                <span>{{item.title}}</span>
              </a>
            </a-menu-item>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>

          <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              欢迎您，海老板 <a-avatar size="large" icon="user" />
            </a>
            <a-menu slot="overlay" @click="dropdown_menu_click">
              <a-menu-item key="detail">
                查看详情
              </a-menu-item>
              <a-menu-item key="edit">
                编辑信息
              </a-menu-item>
              <a-menu-item key="quit">
                退出登录
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
          </transition>
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import menu from '@/config/menu.config';
@Component
export default class App extends Vue {
  // 菜单栏列表
  private menuList: object[];
  // 选择的值
  private selectKeys: string[] = ['/'];
  // 是否开发一级菜单栏
  private openkeys: string[] = [];
  // 构造器
  constructor() {
    super();
    this.menuList = menu;
  }
  // 用户下拉菜单点击事件
  private dropdown_menu_click(content: any) {
    const { key } = content;
    switch (key) {
      case 'detail':
        this.$router.push('/userDetail');
        break;
      case 'edit':
        this.$router.push('/userEdit');
        break;
      case 'quit':
        // 清楚缓存
        sessionStorage.clear();
        // 跳回登录页面
        this.$router.push('/login');
        break;
      default:
        break;
    }
  }
  // 页面加载前校验是否存token不存在提示信息跳回登录页
  private beforeCreate() {
    // 获取缓存token信息
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.$message.error('无法获取您的登陆信息，请重新登陆');
      this.$router.push('/login');
    }
  }
  // 监听路由
  @Watch('$route', { immediate: true, deep: true })
  private getRuoutePath(val: any, oldVal: any) {
    const { path, meta } = val;
    this.selectKeys = [path];
    if (meta.subItem) {
      this.openkeys = [meta.subItem];
    } else {
      this.openkeys = [];
    }
  }
}
</script>
<style lang="less" scoped>
#home {
  height: 100%;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .ant-layout-header {
    background: #fff;
    text-align: right;
  }
}
</style>
