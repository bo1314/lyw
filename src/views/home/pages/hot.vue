<template>
    <div class="hot">
        <div class="hot-top">
            <div class="iconfont">&#xe78a;本周热门榜单</div>
            <div class="iconfont" style="font-size:12px">全部榜单&#xe633;</div>
        </div>
        <ul class="hot-list">
            <li class="hot-li" v-for="(item,index) in hotlist" :key="index">
                <img :src="item.img" alt="">
                <p style="font-size:14px">{{item.title}}</p>
                <p class="hot-mack">￥<span>{{item.jg}}</span>起</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hotlist:[
                {
                    id:"01",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                },
                {
                    id:"02",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                    
                },
                  {
                    id:"03",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                },
                  {
                    id:"04",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                },
                  {
                    id:"05",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                },
                  {
                    id:"06",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                },
                  {
                    id:"07",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                },
                  {
                    id:"08",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                },
                  {
                    id:"09",
                    img:require('../../../assets/images/111.png'),
                    title:"故宫",
                    jg:12
                }, 
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .hot{
        background-color: white;
        margin-top: 1.2rem;
    }
    .hot-top{
        height: 3rem;
        line-height: 3rem;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem 0 1rem;
    }
    .hot-list{
        height: 15rem;
        
        overflow-x:scroll ;
        white-space: nowrap;//强制不能换行
        overflow-y:hidden ;
    }
    .hot-li{
        display: inline-block;
       margin: .4rem 0 0 .5rem;
    }
    .hot-li img{
        display: block;
        width: 10rem;
        height: 10rem;
    }
    .hot-li p{
        line-height: 2rem;
        height: 2rem;
        text-align: center;
        span{
            color: chocolate;
        }
    }
</style>