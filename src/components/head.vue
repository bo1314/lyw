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

        <router-link tag="div" to="/city" class="head-right">
        <!-- <div > -->
            {{city}}
            <span class="iconfont">&#xe627;</span>
        <!-- </div> -->
        </router-link>

       
    </div>
    
</template>


<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['city'])
    }
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