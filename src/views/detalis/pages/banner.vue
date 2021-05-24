<template>
    <div class="banner">
        <div class="banner-h" @click="showSwiper">
            <div class="banner-img">
                <img src="@/assets/images/5f2a01d86107e0a892f7d6398375b219.jpeg" alt="">
            </div>
            <div class="banner-title">
                金海湖风景区（AAAA景区）
            </div>
        </div>
        <div class="img-swiper" v-show="imgSwiper" @click="hideSwiper">
            <img src="@/assets/images/4e93fc8a8d1638bc7919d6842260b3aa.jpeg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            imgSwiper:false,
            imgs:[
                {
                    "id":1,
                    img:require('@/assets/images/4e93fc8a8d1638bc7919d6842260b3aa.jpeg'),
                },
                {
                    "id":2,
                    img:require('@/assets/images/5f2a01d86107e0a892f7d6398375b219.jpeg'),
                },
                {
                    "id":3,
                    img:require('@/assets/images/86a4e97f1b9be684f1ce8bacd7b80293.jpeg'),
                }
            ]
        }   
    },
    methods:{
        showSwiper(){
            this.imgSwiper = true
        },
        hideSwiper(){
            this.imgSwiper = false
        },
        
    },
}
</script>
<style lang="less" scoped>
    .banner{
        position: relative;
    }
    .banner-img{
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
    }
    .banner-img img{
        max-width: 100%;
    }
    .banner-title{
        position: absolute;
        top:13rem;
        left: 1rem;
        font-size: 16px;
        color: white;
    }
    .img-swiper{
        background-color:#000;
        position: fixed;
        top: 0;
         bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-swiper img{
        max-width: 100%;
    }

</style>