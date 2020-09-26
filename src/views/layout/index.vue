<template>
  <div class="layout-container">
    layout
    <router-view/>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
      <van-tabbar-item icon="search" to='/comment'>问答</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to='/vedio'>视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to='/profile'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      active: 0,
    }
  }

}
</script>