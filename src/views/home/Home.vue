<template>
  <div class="home">
    <Head>
        <div class="head-search">
            <span class="iconfont">&#xe9f2;</span>
            输入城市/景点/游玩主体
        </div>
    </Head>
    <!-- 轮播 -->
    <Carousel>
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="max-width:100%" />
        </van-swipe-item>
    </Carousel>
    <!-- 滑动菜单 -->
   <van-swipe class="menu" indicator-color="@maincolor">
      <van-swipe-item>
        <div class="menu-item">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div
          >
        </div>
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
    </van-swipe>

  </div>
  
</template>

<script>

//引入子组件 或者是引入公共组件↓🚩
import Head  from '@/components/head.vue'
import Carousel from '@/components/carousel.vue'


export default {
  name: 'Home',
  components: {
    //子组件 某个部分 或者是公共组件🚩
    Head,Carousel
  },
  data(){
    return {
      images:[
        require('../../assets/images/5f2a01d86107e0a892f7d6398375b219.jpeg'),
        require('../../assets/images/86a4e97f1b9be684f1ce8bacd7b80293.jpeg'),
        require('../../assets/images/86a4e97f1b9be684f1ce8bacd7b80293.jpeg'),
      ],
    }
  }
}
</script>

<style lang="less" scoped>
  @maincolor:#00bcd4;


  .head-search{
    background-color: white;
    line-height: 3rem;
    height: 3rem;
    color:#868686;
    border-radius: 1.5rem;
    width: 22rem;
    font-size: 1.2rem;
    
    span{
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  // 滑动菜单
  .menu .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    margin-top: 20px;
  }
</style>
