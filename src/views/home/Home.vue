<template>
  <div class="home">
    <Head>
        <div class="head-search">
            <span class="iconfont">&#xe9f2;</span>
            输入城市/景点/游玩主体
        </div>
    </Head>
  </div>
</template>

<script>
// @ is an alias to /src
//引入子组件 或者是引入公共组件↓🚩
// import HelloWorld from '@/components/HelloWorld.vue' 
import Head  from '@/components/head.vue'


export default {
  name: 'Home',
  components: {
    //HelloWorld 子组件 某个部分 或者是公共组件🚩
    Head
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
</style>
