<template>
    <div class="hd">
        <div class="head-left">
            <span class="iconfont">&#xe620;</span>
        </div>

        <!-- <div class="head-search">
            <span class="iconfont">&#xe9f2;</span>
            输入城市/景点/游玩主体
        </div> -->
        <slot></slot>

        <div class="head-right">
            北京
            <span class="iconfont">&#xe627;</span>
        </div>

       
    </div>
    
</template>


<script>
export default {
    
}
</script>

<style lang="less" scoped>
    @maincolor:#00bcd4;

    //---------------
    .hd{
        display: flex;
        justify-content:space-around;
        align-items: center;
        width: 100vw;
        height: 5rem;
        background-color: @maincolor;
        color:white;
        
    }
   
</style>