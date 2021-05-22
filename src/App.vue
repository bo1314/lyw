<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
     
    </div>
    <!-- 显示子视图 虽然APP.js是主视图首页 没错 但不推荐直接在APP.js中直接写 首页的一般都是 引入子视图 改为主要的 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .app{
    
  }
</style>
