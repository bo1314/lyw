<template>
    <div class="header">
        <div class="iconfont ic" @click="onClickLeft">&#xe620;</div>
        <div class="title">城市选择</div>
    </div>
</template>

<script>
export default {
    methods: {
        onClickLeft() {
            this.$router.push('/')
        },
    },
}
</script>
<style lang="less" scoped>
    @navcolor:#00bcd4;
    .header{
        height: 5rem;
        background-color:@navcolor;
        width: 100vw;
        position: relative;
    }
    .ic{
        width: 5rem;
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
         color: white;
         font-size: 18px;
    }
    .title{
        height: 5rem;
        line-height: 5rem;
        font-size: 16px;
        text-align: center;
        color: white;
    }
</style>