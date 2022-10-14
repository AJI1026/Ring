<template>
    <div class='login-container'>
        <!-- <h1>登录页</h1> -->
        <!-- 表单验证 -->
        <van-form @submit="onSubmit" ref="loginForm">
            <!-- 手机号 -->
            <!-- 使用输入框组件提供的属性center使内容居中 -->
            <van-field class="form-input" v-model="user.mobile" name="手机号" placeholder="请输入手机号" :rules="userFormRules.mobile" maxlength="11" center>
            <!-- 利用i标签和插槽自定义手机图标 -->     
            <i slot="left-icon" class="iconfont icon-shouji"></i>
            </van-field>
            <!-- 验证码 -->
            <van-field class="form-input" v-model="user.code" name="验证码" placeholder="请输入验证码" :rules="userFormRules.code" maxlenth="6" center>
            <!-- 利用i标签和插槽自定义手机图标 --> 
            <i slot="left-icon" class="iconfont icon-yanzhengyanzhengma"></i> 
            <!-- 获取验证码部分 -->
            <template #button>
                <!-- 倒计时的显示和隐藏可以利用v-if控制，这里需要finish重置验证吗 -->
                <van-count-down v-if="isCountDownShow" slot="button" :time="1000*6" format="ss s" @finish="isCountDownShow = false"/>
                <!-- 这里为了避免每次点击都会提交表单，需要将native-type设置成button -->
                <van-button round size="small" type="default" class="identifying_code" native-type="button" v-else>获取验证码</van-button>
            </template> 
            </van-field>
        <!-- 登陆按钮，跳转页面 -->
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" class="submit-button">登录</van-button>
          </div>
        </van-form>
        <!-- 背景，上浮的泡泡 -->
        <div class="bubbles">
            <span style="--i:11;"></span>
            <span style="--i:14;"></span>
            <span style="--i:16;"></span>
            <span style="--i:17;"></span>
            <span style="--i:21;"></span>
            <span style="--i:3;"></span>
            <span style="--i:8;"></span>
            <span style="--i:12;"></span>
            <span style="--i:17;"></span>
            <span style="--i:35;"></span>
            <span style="--i:48;"></span>
            <span style="--i:2;"></span>
            <span style="--i:8;"></span>
            <span style="--i:12;"></span>
            <span style="--i:17;"></span>
            <span style="--i:19;"></span>
            <span style="--i:27;"></span>
            <span style="--i:2;"></span>
            <span style="--i:8;"></span>
            <span style="--i:11;"></span>
            <span style="--i:14;"></span>
            <span style="--i:16;"></span>
            <span style="--i:12;"></span>
            <span style="--i:35;"></span>
            <span style="--i:48;"></span>
            <span style="--i:3;"></span>
            <span style="--i:8;"></span>
            <span style="--i:12;"></span>
            <span style="--i:17;"></span>
            <span style="--i:35;"></span>
            <span style="--i:48;"></span>
            <span style="--i:2;"></span>
            <span style="--i:8;"></span>
            <span style="--i:12;"></span>
            <span style="--i:17;"></span>
            <span style="--i:19;"></span>
            <span style="--i:27;"></span>
            <span style="--i:2;"></span>
        </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        // 用户输入的用户信息
        user: {
            mobile: '',
            code: ''
        },
        // 正则表
        userFormRules: {
            mobile: [{required: true, message: '手机号不能为空'},{pattern: /^1[3|4|5|7|8|9]\d{9}$/, message: '手机号格式错误'}],
            code: [{required: true, message: '验证码不能为空'},{pattern: /^\d{6}$/, message: '验证码格式错误'}]
        },
        // 控制倒计时显示隐藏
        isCountDownShow: false
      }
    },
    methods: {
        // 表单提交
        onSubmit() {

        }
    }
  }
</script>
  
<style scoped lang="less">
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
      overflow: hidden;
      cursor: pointer;
  }
  /* 容器 */
  .login-container{
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      align-items: center;
      background: url(../../assets/wallhaven-3zmr6y.jpeg);
      background-size: cover;
      gap: 30px;
      overflow: hidden;
      position: relative;
      background-attachment: fixed;
      cursor: pointer;
  }
  .form-input {
    height: 100px;
    width: 600px;
  }
  .form-input:nth-child(2) {
    margin-top: 20px;
  }
  /*验证码按钮样式*/
  .identifying_code {
    margin-right: 20px;
    width: 150px;
    height: 60px;
    background-color: rgb(237,237,237);
    font-Family: "MicrosoftYaHei";
    color: rgb(102,102,102);
    font-size: 12px;
  }
  /* 上浮泡泡 */
  .bubbles {
      position: relative;
      display: flex;
  }
  .bubbles span {
      position: relative;
      width: 30px;
      height: 30px;
      background: #4fc3dc;
      margin: 0 4px;
      border-radius: 50%;
      box-shadow: 0 0 0  10px #4fc3dc44,
      0 0 50px #4fc3dc,
      0 0 100px #4fc3dc;
      animation: animate 20s linear infinite;
      animation-duration: calc(140s / var(--i));
  }
  .bubbles span:nth-child(even) {
      background: #ff2d75;
      box-shadow: 0 0 0  10px #ff2d7544,
      0 0 50px #ff2d75,
      0 0 100px #ff2d75;
      animation: animate 20s linear infinite;
      animation-duration: calc(140s / var(--i));
  }
  @keyframes animate {
      0% {
          transform: translateY(100vh) scale(0);
      }
      100% {
          transform: translateY(-100vh) scale(1);
      }
  }
</style>