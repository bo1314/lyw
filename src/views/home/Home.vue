<template>
  <div class="home">
    <Head>
        <div class="head-search">
            <span class="iconfont">&#xe9f2;</span>
            输入城市/景点/游玩主体
        </div>
    </Head>
    <!-- 轮播 -->
    <Carousel>
        <van-swipe-item v-for="(image, index) in imagess" :key="index">
          <img v-lazy="image" style="max-width:100%" />
        </van-swipe-item>
    </Carousel>

    <!-- 滑动菜单 -->
   <van-swipe class="menu" indicator-color="@maincolor">
      <van-swipe-item class="menu-item" v-for="(item,i) in page" :key="i">
        <div class="menu-list" v-for="value in item" :key="value.id">
          <img :src="value.img">
          <p>{{value.title}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!--定位失败 玩水季  -->
    <location></location>
    <!-- 门票 -->
    <menpiao></menpiao>
    <!-- 热门榜单 -->
    <hot :hotlist="hotlist"></hot>

    <like :likelist="likelist"></like>

    <vacation :vacationdata='vacationdata'></vacation>
  </div>
  
</template>

<script>

//引入子组件 或者是引入公共组件↓🚩
import Head  from '@/components/head.vue'
import Carousel from '@/components/carousel.vue'
import location from './pages/location.vue'
import menpiao from './pages/menpiao.vue'
import hot from './pages/hot.vue'
import like from './pages/like.vue'
import vacation from './pages/vacation.vue'


export default {
  name: 'Home',
  components: {
    //子组件 某个部分 或者是公共组件🚩
    Head,Carousel,location,menpiao,hot,like,vacation
  },
  data(){
    return {
      imagess:[],
      menuLists:[],
      hotlist:[],
      likelist:[],
      vacationdata:[],
      images:[
        require('../../assets/images/5f2a01d86107e0a892f7d6398375b219.jpeg'),
        require('../../assets/images/86a4e97f1b9be684f1ce8bacd7b80293.jpeg'),
        require('../../assets/images/86a4e97f1b9be684f1ce8bacd7b80293.jpeg'),
      ],
      menuList:[
        {
          id:"01",
          img:require('../../assets/images/hotel.png'),
          title:"景点门票"
        },
        {
          id:"02",
          img:require('../../assets/images/hotel.png'),
          title:"必游榜单"
        },
        {
          id:"03",
          img:require('../../assets/images/hotel.png'),
          title:"夏日玩水"
        },
        {
          id:"04",
          img:require('../../assets/images/hotel.png'),
          title:"主题乐园"
        },
        {
          id:"05",
          img:require('../../assets/images/hotel.png'),
          title:"动植物园"
        },
        {
          id:"06",
          img:require('../../assets/images/hotel.png'),
          title:"故宫"
        },
        {
          id:"07",
          img:require('../../assets/images/hotel.png'),
          title:"一日游"
        },
        {
          id:"08",
          img:require('../../assets/images/hotel.png'),
          title:"公园"
        },
        {
          id:"09",
          img:require('../../assets/images/hotel.png'),
          title:"游乐园"
        },
        {
          id:"10",
          img:require('../../assets/images/hotel.png'),
          title:"全部玩乐"
        },
        {
          id:"11",
          img:require('../../assets/images/hotel.png'),
          title:"夏令营"
        },
      ],
      
      
    }
  },
 
  mounted(){
    this.$http.get('/mock/datahome.json')
    .then((res)=>{
      const datas = res.data.data[0]
      this.imagess= datas.images
      this.menuLists= datas.menuList
      this.hotlist= datas.hotlist
      this.likelist= datas.likelist
      this.vacationdata = datas.vacationdata
    })
  },
  //计算属性
  computed:{
    /*
      [8] 第一页
      [2] 第二页
    */
    page(){
      let pages = []
      this.menuLists.forEach((item,index)=>{
        //index 此时就是0 1 2 3 ~ 9  
        //每个索引除以8 0除8 1除8 2除8 3除8 一直到 8除8 都是0.xx 
        // 9之后的数 除8 都是1.xxx
        let idx = Math.floor(index/8)//Math.floor向下取整
        //此时除以8 向下取整 就可以得到 8个0  2个1
        if(!pages[idx]) pages[idx] = []
        console.log(!pages[idx]);
        
        pages[idx].push(item)
        
      })
      console.log(pages);
      return pages;
    }
  },
  created(){
    // this.fun
  }
}
</script>

<style lang="less" scoped>
  @maincolor:#00bcd4;
  .home{
    background-color: #f5f5f5;
  }
  .head-search{
    background-color: white;
    line-height: 3rem;
    height: 3rem;
    color:#868686;
    border-radius: 1.5rem;
    width: 22rem;
    font-size: 1.2rem;
    
    span{
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  // 滑动菜单
  .menu-item{
    width: 100%;
    height: 19rem;
    display: flex;
    flex-wrap: wrap; 
    background-color: #fff;
  }
  .menu-list{
    width: 25%;
    height: 9rem;

      img{
        display: block;
        width: 4.5rem;
        height: 4.5rem;
        margin: 8px auto;
      }
      p{
        line-height: 20px;
        height: 20px;
        font-size: 14px;
        text-align:center;
        margin-top: 8px;
      }

  }
</style>
