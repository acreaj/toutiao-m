<template>
  <div class="home-container">
    首页
    <child :cmovie='movies' :cmessage='message' @itemclick='receiv'/>
  </div>
</template>

<script>

import child from './child'

export default {
  name: 'Home',
  data(){
    return {
      message: "你好啊，李银河",
      movies: ["海贼王","海绵宝宝"]
    }
  },
  methods:{
    receiv(){
      console.log("123")
    }
  },
  components:{
    child
  }
}
</script>