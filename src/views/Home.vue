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
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view></router-view>
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
  }
}
</style>
