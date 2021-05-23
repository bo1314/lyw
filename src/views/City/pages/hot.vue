<template>
    <div class="hot">
        <van-tabs v-model="active">
            <van-tab title="标签 1">
                <div class="hot-city">
                    <p class="hot-p">热门城市</p>
                    <ul class="hot-list">
                        <li class="hot-li" v-for="(item,index) in city" :key="index">{{item}}</li>
                    </ul>
                </div>
                <!-- <div>
                    <p>字母排序</p>
                    <ul>
                        <li></li>
                    </ul>
                </div> -->
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            city:["北京","上海","三亚","香港","杭州","广州","成都","深圳","江苏","桂林","西安","厦门",]
        };
    },
}
</script>

<style lang="less" scoped>
    .hot-city{
        width: 100%;

    }
    .hot-p{
        line-height: 3rem;
        height: 3rem;
        margin-left: 2rem;
        font-size: 0.4rem;
        
    }
    .hot-list{
        background: white;
        overflow: hidden;
    }
    .hot-li{
        width: 33.12%;
        text-align: center;
        height: 4rem;
        line-height: 4rem;
        float: left;
        border-bottom: 0.2rem solid #ddd;
        border-right: 0.1px solid #ddd;
    }
</style>