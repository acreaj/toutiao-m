<template>
  <div class="article">
    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh" :success-text="refreshText"  :success-duration="1000">
       <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(article,index) in articles" :key="index" class="article-item">
          <div slot="title"  class="van-multi-ellipsis--l3">那些优越环境成长起来的年轻人和很久以前曾经吃过苦现在已经淡忘的人，
            关注社会下层，为了这个世界更公平些，我们应该做些力所能及的事情，特别是在做关乎众人命运的决策的时候，
            让这份社会责任感驻留我们的头脑。

          </div>
          <div slot="label">
            <div class="img"  v-if="article.cover.type === 3" >
               <van-image
                  v-for="(item ,index) in article.cover.images" 
                  :key="index"
                  class="flex-item"
                  fit="cover"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
            <div class="text">
              <span>{{article.aut_name}}</span>
              <span>评论{{article.comm_count}}</span>
              <span>{{article.pubdate}}</span>
            </div>
          </div>
          <van-image
          v-if="article.cover.type === 1"
            
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-cell>
        <!-- <ArticleItem/> -->
    </van-list>

    </van-pull-refresh>
   
  </div>
</template>

<script>
import {getArticles} from '../../../network/recomm'
import ArticleItem from  '../../../components/ArticleItem'

export default {
  name: 'articlelist',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      articles: [],
      loading: false,
      finished: false,
      timestamp: null,
      isRefreshLoading: false,
      refreshText: '',
      cat:[
        {id:'1',name:'家用'},
        {id:'2',name:'家电'},
      ]
    }
  },
  methods:{
     async onLoad() {
        const {data} = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 1
        })

        const {results} = data.data
        // console.log(results)

        this.articles.push(...results)

        console.log(results)
        this.loading = false
        if(results.length){
          this.timestamp = data.data.pre_timestamp
        }else {
          this.finished = true
        }

    },
    async onRefresh(){
       const {data} = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now(),
          with_top: 1
        })

        this.articles.unshift(...data.data.results)

        this.isRefreshLoading = false
        this.refreshText = "刷新成功"
    }
  }
  
}
</script>

<style lang="less">
  .article {
    position: fixed;
    left: 0;
    right: 0;
    top: 90px;
    bottom: 50px;
    overflow-y: auto;
    .article-item {
      .img {
        display: flex;
        .flex-item {
          flex: 1;
          height: 73px;
          &:not(:last-child) {
            padding-right: 4px;
          }
        }
      }
      .van-cell__value {
        flex: unset;
        margin-left: 22px;
        .van-image {
          width: 117px;
          height: 73px;
        }
      }
    }
  }

</style>