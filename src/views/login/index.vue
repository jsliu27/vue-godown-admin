<template>
  <section id="lrbox" class="lrBox">
    <section id="login" :class="{'login': true, 'rotate': isRotate}" >
      <a-form
        id="components-form-demo-normal-login"
        :form="formLogin"
        class="login-form"
        @submit="login_handle"
        >
        <a-form-item>
          <a-input
            v-decorator="rulesLogin.userName"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="rulesLogin.password"
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
          <section class="to-register-button" @click="to_register">
            去注册
          </section>
        </a-form-item>
      </a-form>
    </section>
    <section id="register" :class="{'register': true, 'rotate': isRotate}">
      <a-form
        id="components-form-demo-normal-register"
        :form="formRegister"
        class="register-form"
        @submit="register_handle"
        >
        <a-form-item>
          <a-input
            v-decorator="rulesRegister.userName"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="rulesRegister.password"
            type="password"
            placeholder="密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="rulesRegister.confirmPwd"
            type="password"
            placeholder="确认密码"
            @blur="handle_confirm_blur"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="rulesRegister.phoneNmuber"
            placeholder="手机号"
          >
            <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item class="valid-code-form-item">
          <a-input
            v-decorator="rulesRegister.validCode"
            placeholder="验证码"
          >
            <a-icon slot="prefix" type="audit" style="color: rgba(0,0,0,.25)" />
          </a-input>
          <a-button type="primary" class="valid-code" :disabled='isSendValidCodee'>
            发送验证码
          </a-button>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="register-form-button">
            注册
          </a-button>
          <section class="to-login-button" @click="to_login">
            去登陆
          </section>
        </a-form-item>
      </a-form>
    </section>
  </section>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  // 登录表单
  private formLogin: any;
  // 表单校验
  private rulesLogin: object = {
    userName: [
      'userName',
      { rules: [{ required: true, message: '用户名不能为空' }] },
    ],
    password: [
      'password',
      { rules: [{ required: true, message: '密码不能为空' }] },
    ],
  };
  // 注册表单
  private formRegister: any;
  // 确认密码校验
  private confirmDirty: boolean = false;
  // 发送验证码按钮禁用
  private isSendValidCodee: boolean = true;
  // 表单校验
  private rulesRegister: object = {
    userName: [
      'userName',
      { rules: [{ required: true, message: '用户名不能为空' }] },
    ],
    password: [
      'password',
      { rules: [
          { required: true, message: '密码不能为空' },
          { leng: 11, message: '长度为11位' },
          {
            validator: this.validateToNextPassword,
          },
        ],
      },
    ],
    confirmPwd: [
      'confirmPwd',
      { rules: [
          { required: true, message: '确认密码不能为空' },
          {
            validator: this.compareToFirstPassword,
          },
        ],
      },
    ],
    phoneNmuber: [
      'phoneNmuber',
      { rules: [
          { required: true, message: '手机号不能为空' },
          {
            validator: this.validatePhoneNumber,
          },
        ],
      },
    ],
    validCode: [
      'validCode',
      { rules: [{ required: true, message: '验证码不能为空' }] },
    ],
  };
  // 旋转吧
  private isRotate: boolean = false;

  // 创建之前调用
  private beforeCreate() {
    this.formLogin = this.$form.createForm(this, { name: 'formLogin' });
    this.formRegister = this.$form.createForm(this, { name: 'formRegister' });
  }
  // 密码校验
  private validateToNextPassword(rule: any, value: any, callback: any) {
    const form = this.formRegister;
    if (value && this.confirmDirty) {
      form.validateFields(['confirmPwd'], { force: true });
    }
    callback();
  }
  // 确认密码校验
  private compareToFirstPassword(rule: any, value: any, callback: any) {
    const form = this.formRegister;
    if (value && value !== form.getFieldValue('password')) {
      callback('密码与原密码不一致');
    } else {
      callback();
    }
  }
  // 确认密码失焦事件
  private handle_confirm_blur(e: any) {
    const value = e.target.value;
    this.confirmDirty = this.confirmDirty || !!value;
  }
  // 手机号校验
  private validatePhoneNumber(rule: any, value: any, callback: any) {
    callback();
  }
  // 点击登陆按钮触发
  private login_handle(e: any) {
    // 取消默认事件
    e.preventDefault();
    this.formLogin.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('表单数据====>', values);
        // 保存token
        sessionStorage.setItem('token', '123456789');
        // 跳转到首页
        this.$router.push('/');
      }
    });
  }
  // 点击注册按钮
  private register_handle(e: any) {
    // 取消默认事件
    e.preventDefault();
    this.formRegister.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('表单数据====>', values);
        this.to_login();
      }
    });
  }
  // 点击去注册
  private to_register() {
    this.isRotate = true;
  }
  // 点击去登陆
  private to_login() {
    this.isRotate = false;
  }
}
</script>
<style lang="less" scoped>
.lrBox {
  width: 300px;
  position: fixed;
  right: 100px;
  top: 200px;
  transform-style: preserve-3d; // 3d空间
  .login, .register {
    width: 100%;
    box-shadow: 0 0 5px #ccc;
    padding: 10px;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition: all 500ms ease;
    position: absolute;
    left: 0;
    top: 0;
  }
  .login {
    height: 250px;
    transform: perspective(800px) rotateY(0deg);
    &.rotate {
      transform: perspective(800px) rotateY(180deg);
    }
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
  .register {
    height: 420px;
    transform: rotateY(180deg);
    &.rotate {
      transform: perspective(800px) rotateY(0deg);
    }
    .ant-form-item-control {
      text-align: center;
      .register-form-button {
        width: 100%;
      }
      .to-login-button {
        text-align: center;
        color: @link-color;
        cursor: pointer;
      }
    }
    .valid-code-form-item {
      /deep/.ant-form-item-children {
        display: flex;
      }
      .valid-code {
        margin-left: 10px;
      }
    }
  }
}

</style>
