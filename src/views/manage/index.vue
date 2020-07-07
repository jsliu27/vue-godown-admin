<template>
  <section class="meneger">
    <section class="control-box">
      <a-button type="primary" @click="add_user_handle">
        添加人员
      </a-button>
    </section>
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      >
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { userListData } from '@/api/user';

@Component
export default class Meneger extends Vue {
  private columns: object[] = [
    {
      title: '登陆名',
      dataIndex: 'loginName',
      key: 'loginName',
      scopedSlots: { customRender: 'loginName' },
    },
    {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      ellipsis: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      width: 80,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      ellipsis: true,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      ellipsis: true,
    },
  ];
  private data: object[] = [];
  // 页面加载之前调用
  private beforeCreate() {
    // userListData().then((res: any) => {
    //   this.data = res;
    // });
  }
  // 添加人员
  private add_user_handle() {
    // 跳转添加用户
    this.$router.push('/addUser');
  }
}
</script>

<style lang="less" scoped>
.meneger {
  .control-box {
    margin-bottom: 10px;
    text-align: right;
  }
}
</style>
