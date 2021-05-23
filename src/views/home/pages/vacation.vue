<template>
    <div class="vacation">
        <div class="vacation-title">周末去哪</div>

        <ul class="vacation-list" v-for="item in vacationdata" :key="item.id">
            <li class="vacation-li">
                <img :src="item.img" alt="">
                <p class="p1">{{item.p1}}</p>
                <p class="p2">{{item.p1}}</p>
            </li>
        </ul>
        <!-- {{vacationdata}} -->
    </div>
</template>

<script>
export default {
    props:['vacationdata'],
    data(){
        return{
            // vacationdata:[
            //     {
            //         id:"01",
            //         img:require('../../../assets/images/4e93fc8a8d1638bc7919d6842260b3aa.jpeg'),
            //         p1:"你好",
            //         p2:"哼哼哈哦啊"
            //     },
            //     {
            //         id:"02",
            //         img:require('../../../assets/images/4e93fc8a8d1638bc7919d6842260b3aa.jpeg'),
            //         p1:"你好2",
            //         p2:"哼哼哈哦啊"
            //     },
            //     {
            //         id:"03",
            //         img:require('../../../assets/images/4e93fc8a8d1638bc7919d6842260b3aa.jpeg'),
            //         p1:"你好3",
            //         p2:"哼哼哈哦啊"
            //     },
            // ]
        }
    }
}
</script>

<style lang="less" scoped>
    .vacation{
        padding: .5rem;
    }
    .vacation-title{
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        font-size: 18px;
        margin-top: 1rem;
    }
    .vacation-list{
        width: 100%;
        .p1{
            line-height: 2rem;
            height: 2rem;
            font-size: 16px;
        }
        .p2{
            line-height: 2rem;
            height: 2rem;
            font-size: 12px;
        }
    }
    .vacation-li img{
        max-width: 100%;
    }
</style>