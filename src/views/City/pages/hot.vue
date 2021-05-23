<template>
    <div class="hot">
        <van-tabs v-model="active">
            <van-tab title="标签 1">
                <div class="hot-city">
                    <p class="hot-p">热门城市</p>

                    <ul class="hot-list">
                        <li class="hot-li" v-for="(items,index) of citys" :key="index" @click="changecity(items.name)">
                            {{items.name}}
                        </li>
                    </ul>
                </div>

                <div>
                    <p class="hot-p">字母排序</p>
                   <ul class="hot-list">
                        <li class="hot-li" v-for="(item,index) in dq" :key="item.id" @click="change(index)">{{index}}</li>
                    </ul>
                </div>

                <!-- A B C D -->
                <div class="list-b" v-for="(val,index) in dq" :key="val.id">
                    <div class="list-nav" :ref="index">{{index}}</div>
                    <ul class="list-ul">
                        <li class="list-li" v-for="item in val" :key="item.id">
                                {{item.name}}
                        </li>
                    </ul>
                </div>    
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
        </van-tabs>
    </div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
    props:['citys','dq'],
    data() {
        return {
            active: 0,
            scroll:''
        };
    },
    mounted(){
        // let container = this.$refs['container']
        // this.scroll = new BScroll(container)
    },
    methods:{
        change(index){//将dq中的对象 键 index索引拿了过来 此索引是 ABCD 对象的键
            console.log(index);//此时 就是点击哪个 就能拿到对象键
            console.log(this.$refs[index][0]);
            // this.scroll.scrollToElement(this.$refs[index][0])
            /*
                1、ref 加在普通的元素上，用this.$refs.（ref值） 获取到的是dom元素
　　            2、ref 加在子组件上，用this.$refs.（ref值） 获取到的是组件实例，可以使用组件的所有方法。在使用方法的时候直接this.$refs.（ref值）.方法（） 就可以使用了。
　　            3、如何利用 v-for 和 ref 获取一组数组或者dom 节点
            */
        },
        changecity(name){
            alert(name)
        }
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