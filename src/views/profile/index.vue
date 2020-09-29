<template>
  <div class="profile-container">
    <van-cell-group class="info" v-if="user" >
      <van-cell title="单元格" value="内容" center class="base-info" :border='false'>
        <van-image
          slot="icon"
          width="50"
          height="50"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">{{currentUser.name}}</div>
        <van-button size="small" round>编辑资料</van-button>
      </van-cell>
      <van-grid :border='false'>
        <van-grid-item>
          <div slot="text">
            <div class="span">{{currentUser.art_count}}</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">{{currentUser.certi}}</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">{{currentUser.fans_count}}</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">{{currentUser.follow_count}}</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <div v-else class="unlogin" @click="$router.push('/login')">
        <div class="image">
          <img src="" alt="">
        </div>
        <p>登录/注册</p>
    </div>

    <van-grid :column-num="2">
      <van-grid-item icon-prefix="icon" icon="shoucang" text="文字" />
      <van-grid-item icon-prefix="icon" icon="lishi" text="文字" />
    </van-grid>

    <van-cell v-if="user" value="消息中心" is-link to="/" />
    <van-cell value="小智同学" is-link to="/" />

    <van-cell title="退出登录" v-if="user" @click="loginout"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {getCurrentUser} from '../../network/netlogin'
export default {
  name: "Profile",
  data(){
    return {
      currentUser:{}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created(){
    this.loadCurrentUser()
  },
  methods: {
    async loadCurrentUser(){
      const {data} = await getCurrentUser()
      this.currentUser = data.data
 
    },
    loginout(){
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗?'
      })
      .then(() => {
        // on confirm
        this.$store.commit('setUser',null)
      })
      .catch(() => {
        // on cancel
      });
    }
  }
};
</script>

<style lang="less">
  .profile-container {
    .info {
      background: blanchedalmond;
      .base-info {
        background: unset;
      }
      /deep/ .van-grid-item__content{
        background: unset;
      }
    }

    .unlogin {
      height: 180px;
      background-color: blanchedalmond;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      .image {
        margin: 0 auto;
        width: 66px;
        height: 66px;
        background-color: lightslategray;
      }
      p {
        color: #fff;
        font-size: 16px;
      }
    }
  }
</style>
