<template>
  <div>
    <section id="register" class="register">
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
        <a-form-item>
          <a-button type="primary" html-type="submit" class="register-form-button">
            添加
          </a-button>
        </a-form-item>
      </a-form>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AddUser extends Vue {
  // 注册表单
  private formRegister: any;
  // 确认密码校验
  private confirmDirty: boolean = false;
  // 表单校验
  private rulesRegister: object = {
    userName: [
      'userName',
      { rules: [{ required: true, message: '用户名不能为空' }] },
    ],
    password: [
      'password',
      {
        rules: [
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
      {
        rules: [
          { required: true, message: '确认密码不能为空' },
          {
            validator: this.compareToFirstPassword,
          },
        ],
      },
    ],
    phoneNmuber: [
      'phoneNmuber',
      {
        rules: [
          { required: true, message: '手机号不能为空' },
          {
            validator: this.validatePhoneNumber,
          },
        ],
      },
    ],
  };
  private beforeCreate() {
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
  // 点击注册按钮
  private register_handle(e: any) {
    // 取消默认事件
    e.preventDefault();
    this.formRegister.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('表单数据====>', values);
      }
    });
  }
}
</script>
<style lang="less" scoped>
.register {
  width: 300px;
  box-shadow: 0 0 5px #ccc;
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  right: 100px;
  top: 200px;
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
}
</style>
