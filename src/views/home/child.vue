<template>
  <div class="child-container">
    child
    {{cmovie}}
    {{cmessage}}
    <button v-for="(item,index) in cat" :key="index" @click="btnClick(item)">{{item.name}}</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  props: ['cmovie','cmessage'],
  data(){
    return {
      cat:[
        {id:'1',name:'家用'},
        {id:'2',name:'家电'},
      ]
      

    }
  },
  methods:{
    btnClick(item){
      console.log(item)
      this.$emit('itemclick')
    }
  }
}
</script>