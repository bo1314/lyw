<template>
    <div class="city">
        <city-header></city-header>
        <city-hot :citys="citys" ></city-hot>
        <city-sort :dq="dq"></city-sort>
    </div>
</template>
<script>

import cityHeader from '../City/pages/header'
import cityHot from '../City/pages/hot'
import citySort from '../City/pages/sort'

export default {
    components:{
        cityHeader,cityHot,citySort
    },
    data(){
        return{
            citys:[],
            dq:{}
        }
    },
    mounted(){
      this.$http.get('/mock/cs.json')
        .then((res)=>{
            console.log(res.data);
            this.citys = res.data.city
            this.dq = res.data.dq
        })
    }
}
</script>

<style lang="less" scoped>
    .city{
         background-color: #f5f5f5;
    }
</style>