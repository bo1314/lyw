<template>
    <div class="detali">
        <Header></Header>
        <Banner></Banner>
        <div class="s">ssss</div>
    </div>
</template>


<script>
import Header from './pages/header'
import Banner from './pages/banner'
export default {
    components:{
        Header,Banner
    },
    data() {
        return {

        }
    },
    activated(){
        document.documentElement.scrollTop = 0
    }
}
</script>

<style lang="less" scoped>
    .s{
        height: 2000px;
    }
</style>