<template>
  <div class="home-container">
     <van-nav-bar>
       <van-button class="serach-btn" slot="title" round icon="search" type="info">搜索</van-button>
     </van-nav-bar>

     <!-- 文章列表 -->
     <van-tabs v-model="active">
      <van-tab v-for="item in channels" :key="item.id" :title="item.name" >
        <articlelist :channel="item"/>
      </van-tab>
      
    </van-tabs>

    <child :cmovie='movies' :cmessage='message' @itemclick='receiv'/>
  </div>
</template>

<script>

import child from './child'
import articlelist from './comm/article-list'
import {getUserChannels} from '../../network/netlogin'

export default {
  name: 'Home',
  data(){
    return {
      active: 0,
      channels: [],
      message: "你好啊，李银河",
      movies: ["海贼王","海绵宝宝"]
    }
  },
  components: {
    articlelist,child
  },
  created(){
    this.loadChannels()
  },
  methods:{
    async loadChannels(){
      const {data} = await getUserChannels()
      // console.log(data)
      this.channels = data.data.channels
    },

    receiv(){
      console.log("123")
    }
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    /deep/ .van-nav-bar__title {
      max-width: unset;
    }
    .van-nav-bar {
      background-color: #3296fa;
      .serach-btn {
        width: 277px;
        height: 32px;
        background-color: #5babfb;
        border: none;
        .van-icon {
          font-size: 18px;
           color: #fff;
        }
        .van-button__text {
          font-size: 16px;
         
        }
      }
    }
    
  }
</style>