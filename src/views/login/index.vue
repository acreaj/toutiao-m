<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form 
      @submit="onlogin" 
      @failed="onfailed" 
      :show-error="false" 
      :show-error-message="false"
      ref="loginform"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="icon"
        left-icon="shouji"
        placeholder="请输入手机号"
        name="mobile"
        :rules="formRule.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="icon"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        :rules="formRule.code"
      >
      
       <template #button>
         <van-count-down 
        :time="1000*3"
        format="ss s"
        @finish="isCount=false"
        v-if="isCount"
      />
        <van-button v-else class="send-btn" size="small" type="primary" round @click.prevent="onSend" :loading="isSend">发送验证码</van-button>
      </template>
      </van-field>

      <div class="login-btn-wrap">
        <van-button class="login-btn" type="info" size="large">登录</van-button>
      </div>
    </van-form>

   
  </div>
</template>

<script>
import {login,sendMsg} from '../../network/netlogin.js'
import { Toast } from 'vant'
// import {request} from '../../utils/request'

export default {
  name: 'Login',
  data(){
    return {
      user:{
        mobile: '17090086870',
        code: '246810'
      },
      formRule:{
        mobile: [
          { required: true, message: '请填写手机号' },
          { pattern: /^1\d{10}$/, message: '手机号格式错误'}
        ],
        code: [
          { required: true, message: '请填写验证码' },
          { pattern: /\d{6}$/, message: '验证码格式错误'}
        ]
      },
      isCount: false,
      isSend: false,
    }
  },
  methods:{
    onClickLeft(){
      this.$router.back();
    },
    async onlogin(){

      Toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      });

      try {
        const res = await login(this.user)
        this.$toast.success('登录成功');
        // console.log(res)
        this.$store.commit('setUser',res.data.data)

        // 这个方法不太好
        this.$router.back();
        
      } catch (error) {
        Toast.fail('登录失败');
      }
     
      // let data = login(this.user)
      // console.log(data)
     
    },
    onfailed(error){
      console.log(error);
      if(error.errors[0]){
        this.$toast({
          message: error.errors[0].message,
          position: top
        })
      }
    },
    async onSend(){
      try {
        await this.$refs['loginform'].validate('mobile')

        this.isSend = true
        await sendMsg(this.user.mobile)

        this.isCount = true

      } catch (error) {
        let message = ''
        if( error && error.response && error.response.status == 429 ){
          message = "发送太频繁了，请稍后再试"
         
        }else if(error.name == 'mobile'){
          message = error.message
        }else {
          message = "未知错误"
        }

        this.$toast({
          message,
          position: top
        })
      }

      this.isSend = false
    }
 
 }
}
</script>

<style lang="less">
  .van-nav-bar {
    background-color: #3296fa;
    .van-icon {
       color: #fff;
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }

  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    font-size: 11px;
    border: none;
    color: #666;
  }
  .login-btn-wrap {
    
    margin: 26px 16px;
    .login-btn {
      background-color: #6db4fb;
    }
  }
</style>