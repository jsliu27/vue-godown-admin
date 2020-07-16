<template>
  <section id="login" class="login">
      <a-form
        id="components-form-demo-normal-login"
        :form="formLogin"
        class="login-form"
        >
        <a-form-item>
          <a-input
            v-decorator="rulesLogin.loginName"
            placeholder="登录名"
            @pressEnter='()=> $refs.pwd.focus()'
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="rulesLogin.passWord"
            ref="pwd"
            type="passWord"
            placeholder="密码"
            @pressEnter='login_handle'
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            class="login-form-button"
            :loading="iconLoading"
            @click="login_handle"
            >
            登陆
          </a-button>
        </a-form-item>
      </a-form>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { userLogin } from '@/api/user';

@Component
export default class Login extends Vue {
  // 登录表单
  private formLogin: any;
  // 表单校验
  private rulesLogin: object = {
    loginName: [
      'loginName',
      { rules: [{ required: true, message: '登录名不能为空' }] },
    ],
    passWord: [
      'passWord',
      { rules: [
        { required: true, message: '密码不能为空' },
        ],
      },
    ],
  };
  // 登录的loading
  private iconLoading: boolean = false;
  // 创建之前调用
  private beforeCreate() {
    this.formLogin = this.$form.createForm(this, { name: 'formLogin' });
  }
  // 点击登陆按钮触发
  private login_handle(e: any) {
    // 取消默认事件
    e.preventDefault();
    this.formLogin.validateFields((err: any, values: object) => {
      if (!err) {
        this.iconLoading = true;
        // 调用用户登录的接口
        userLogin(values).then((res: any) => {
          const { success, data, message } = res;
          if (success) {
            // 保存token
            sessionStorage.setItem('token', '123456789');
            // 跳转到首页
            this.$router.push('/');
          } else {
            this.$message.error(message);
          }
          this.iconLoading = false;
        }).catch((error: any) => {
          console.log(error);
          this.iconLoading = false;
        });
      }
    });
  }
}
</script>
<style lang="less" scoped>
.login {
  width: 300px;
  box-shadow: 0 0 5px #ccc;
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  right: 100px;
  top: 200px;
  .ant-form-item-control {
    text-align: center;
    .login-form-button {
      width: 100%;
    }
    .to-register-button {
      text-align: center;
      color: @link-color;
      cursor: pointer;
    }
  }
}
</style>
