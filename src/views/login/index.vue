<template>
  <section id="login" class="login" >
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="submit_handle"
      >
      <a-form-item>
        <a-input
          v-decorator="rules.userName"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="rules.password"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登陆
        </a-button>
        <section class="register-form-button">
          注册
        </section>
      </a-form-item>
    </a-form>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  // 登录表单
  private form: any;
  // 表单校验
  private rules: object = {
    userName: [
      'userName',
      { rules: [{ required: true, message: '用户名不能为空' }] },
    ],
    password: [
      'password',
      { rules: [{ required: true, message: '密码不能为空' }] },
    ],
  };
  // 创建之前调用
  private beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form_login' });
  }
  // 点击登陆按钮触发
  private submit_handle(e: any) {
    // 取消默认事件
    e.preventDefault();
    this.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('表单数据====>', values);
        // 保存token
        sessionStorage.setItem('token', '123456789');
        // 跳转到首页
        this.$router.push('/');
      }
    });
  }
}
</script>
<style lang="less" scoped>
.login {
  width: 300px;
  box-shadow: 0 0 5px #ccc;
  position: fixed;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  box-sizing: border-box;
  transform-style: preserve-3d; // 3d空间
  .ant-form-item-control {
    text-align: center;
    .login-form-button {
      width: 100%;
    }
    .register-form-button {
      text-align: center;
      color: @link-color;
      cursor: pointer;
    }
  }
}
</style>
