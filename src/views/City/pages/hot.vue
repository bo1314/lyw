<template>
    <div class="hot">
        <van-tabs v-model="active">
            <van-tab title="标签 1">
                <div class="hot-city">
                    <p class="hot-p">热门城市</p>

                    <ul class="hot-list">
                        <li class="hot-li" v-for="(items,index) of citys" :key="index">{{items.name}}</li>
                    </ul>
                </div>

                <div>
                    <p class="hot-p">字母排序</p>
                   <ul class="hot-list">
                        <li class="hot-li" v-for="(item,index) in AZ" :key="index">{{item}}</li>
                    </ul>
                </div>
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
        </van-tabs>
    </div>
</template>

<script>

export default {
    props:['citys'],
    data() {
        return {
            active: 0,
            AZ:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",],
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
       
        overflow: hidden;
    }
    .hot-li{
        background: white;
        width: 33.12%;
        text-align: center;
        height: 4rem;
        line-height: 4rem;
        float: left;
        border-bottom: 0.2rem solid #ddd;
        border-right: 0.1px solid #ddd;
    }
</style>