<template>
  <div class="body">
    <div class="login-cont">
      <div class="login-title">欢迎使用 西彭工业园区智慧工地</div>
      <div class="login-box">
        <div class="title">
            用户登录
        </div>
        <div class="form" id="form-data">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="66px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <!-- <button v-on:click="login" style="margin-left:48px;">登录</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String  //这是app父组件传进来的数据,子组件接收
  },
  data() {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    login() {
      console.log('登录点击事件');
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm.name);
          this.$http({
            method: 'get',
            url: '/api/v1/accounts/login',
            params: {
              account: this.ruleForm.name,
              password: this.ruleForm.password
            }
          }).then(res => {
            console.log(res);
            localStorage.setItem('token', res.token);
          }).catch(err => {
            console.log(err);
            this.$message.error('账号或密码输入错误！');
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
*{
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}
.body{
  background: url('./../assets/login/login3.jpg')  no-repeat center center fixed;
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  min-width: 1000px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}


.login-cont {
  width: 1000px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -500px;
  margin-top: -300px;
}
.login-title{
  font-size: 46px;
  color: #fff;
  text-align: center;
  margin-bottom: 60px;
}
.login-box{
  width: 360px;
  height: auto;
  margin: 0 auto;
  background-color: #fff;
  padding: 38px 0 16px;
}

@media(max-width: 1440px) {
  .login-cont {
    width: 1000px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -500px;
    margin-top: -250px;
  }
  .login-title{
    font-size: 46px;
    color: #fff;
    text-align: center;
    margin-bottom: 52px;
  }
  .login-box{
    width: 360px;
    height: auto;
    margin: 0 auto;
    background-color: #fff;
    padding: 34px 0 12px;
  }
}

.login-box .title {
  color: #5890C3;
  font-size: 30px;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  height: 66px;
  text-align: center;
}
.login-box .title img{
  width: 64px;
  height: 64px;
  position: absolute;
  top: 25px;
  left: 66px;
}
.login-box .form{
  width: 280px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 30px;
}
.login-box .form input{
  box-sizing: border-box;
  width: 278px;
  height: 47px;
  padding-left: 56px;
  font-size: 17px;
}
.login-box .form img{
  position: absolute;
  top:116px;
  width: 56px;
  height: 56px;
}
.loginbtn{
  display: block;
  width: 180px;
  height: 38px;
  background-color: #5890C3;
  border: none;
  margin: 0 auto;
  color: #fff;
  font-size: 16px;
  border-radius: 20px;
  outline: none;
}

:host ::ng-deep .anticon:before {
  display: block;
  font-size: 24px;
}
.login-box .form .register {
  float: left;
  color: #5890C3;
  font-size: 16px;
  text-decoration: underline;
}
.login-box .form .forget{
  float: right;
  color: #5890C3;
  font-size: 16px;
  text-decoration: underline;
}

:host ::ng-deep .ant-btn-primary {
  width: 180px;
  height: 38px;
  color: #fff;
  background-color: #5890C3;
  border-color: #5890C3;
  border-radius: 20px;
}

:host ::ng-deep .ant-input-affix-wrapper .ant-input-prefix {
  left: 18px;
  font-size: 18px;
}

:host ::ng-deep .ant-btn-primary.disabled, .ant-btn-primary.disabled.active, .ant-btn-primary.disabled:active, .ant-btn-primary.disabled:focus, .ant-btn-primary.disabled:hover, .ant-btn-primary[disabled], .ant-btn-primary[disabled].active, .ant-btn-primary[disabled]:active, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:hover{
  color: rgba(0,0,0,.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
}

.input-box{
  width: 280px;
  height: 146px;
}
.account-input{
  width: 280px;
  height: 76px;
}

</style>
