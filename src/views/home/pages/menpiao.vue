<template>
    <div class="menpiao border-top">
        <div class="menpiao-item" style="border-right: 1px solid #ccc ">
            <img src="" alt="">
        </div>
        <div class="menpiao-item">
           <img src="" alt="">
        </div>
    </div>
</template>

<style lang="less" scoped>
    .menpiao{
        display: flex;
        background-color: #fff;
        position: relative;
        margin-top: 1.2rem;
        
    }
    .menpiao-item{
        width: 50%;
        height: 6rem;
        line-height: 6rem;
        text-align: center;
        
    }
    .menpiao-item img{
        display: block;
        height: 6rem;
        background-color: aqua;  
    }
</style>