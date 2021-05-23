<template>
    <div class="list">
        <div class="list-b" v-for="(val,index) in dq" :key="val.id">
            <div class="list-nav">{{index}}</div>
            <ul class="list-ul">
                <li class="list-li" v-for="item in val" :key="item.id">
                        {{item.name}}
                </li>
            </ul>

        </div>    
    </div>
</template>
<script>
export default {
    props:['dq'],
}
</script>

<style lang="less" scoped>
    .list-b{
        width: 100%;

    }
    .list-nav{
        line-height: 3rem;
        height: 3rem;
        margin-left: 2rem;
        font-size: 0.4rem;
        
    }
    .list-ul{
        
        overflow: hidden;
    }
    .list-li{
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

