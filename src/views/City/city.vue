<template>
    <div class="city">
        <city-header></city-header>
        <city-hot></city-hot>
        <city-sort></city-sort>
    </div>
</template>
<script>

import cityHeader from '../City/pages/header'
import cityHot from '../City/pages/hot'
import citySort from '../City/pages/sort'

export default {
    components:{
        cityHeader,cityHot,citySort
    }
}
</script>

<style lang="less" scoped>
    .city{
         background-color: #f5f5f5;
    }
</style>