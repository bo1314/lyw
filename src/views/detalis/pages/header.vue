<template>
   <div class="header">
        <div class="iconfont ic" @click="onClickLeft">&#xe620;</div>
        <div class="title">详情页</div>
    </div>
</template>
<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        onClickLeft(){
            this.$router.push('/')
        }
    }
}
</script>
<style lang="less" scoped>
    .header{
        width: 100%;
        height: 5rem;
        background-color:#00bcd4;
    }
    .ic{
        width: 5rem;
        height: 5rem;
        line-height: 5rem;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        color: white;
    }
    .title{
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        font-size: 16px;
        color: white;
    }
</style>
