<template>
    <div class="carousel">
        <van-swipe class="my-swipe" :autoplay="3200" indicator-color="#00bcd4">
            <slot></slot>
        </van-swipe>
    </div>
</template>

<style lang="less" scoped>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: aqua;
    }
</style>