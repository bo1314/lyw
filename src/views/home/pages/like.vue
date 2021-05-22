<template>
    <div class="like">
        <div class=" like-top  iconfont">
            &#xe689;
            猜你喜欢
        </div>
        <div class="like-body" v-for="item in likelist" :key="item.id">
            <div class="like-left">
                <img :src="item.img" alt="">
            </div>
            <div class="like-right">
                <div class="text-mx">{{item.name}}</div>
                <div>{{item.num}}条评论</div>
                <div class="foot">
                    <div class="js">{{item.jg}}价格</div>
                    <div class="dq">{{item.dq}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            likelist:[
                {
                    id:"01",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },
                {
                    id:"02",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },
                {
                    id:"03",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },
                {
                    id:"04",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },
                {
                    id:"05",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },
                {
                    id:"06",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },
                {
                    id:"07",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },
                {
                    id:"08",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },
                {
                    id:"09",
                    img:require('../../../assets/images/111.png'),
                    name:"金海湖风景区",
                    num:"1333",
                    jg:"12",
                    dq:'北京'
                },

            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .like-top{
        width: 100%;
        height: 2rem;
       
        font-size: 18px;
        line-height: 2rem;
    }
    .like-body{
        width: 100vw;
        height: 10rem;
         border-bottom: 1px solid rgb(90, 90, 90);
         margin-top: 1rem;
    }
    .like-left{
        width: 30vw;
        float: left;
        text-align: center;
    }
    .like-left img{
        max-width: 9rem;
    }
    .like-right{
            .text-mx{
                font-size: 18px;
                line-height: 4rem;
                height: 4rem;
            }
    }
    
    .like-right .foot{
        line-height: 3rem;
        display: flex;
        justify-content: space-between;
        font-size: 16px ;
        margin-top:.9rem ;
        .dq{
            margin-right: 5px;
        }
    }
</style>