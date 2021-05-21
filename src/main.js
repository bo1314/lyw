import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入初始化样式文件
import './assets/css/reset200802.css'

//引入 fastclick.js 解决onclick的300延迟问题 npm install fastclick -save
import FastClick from 'fastclick'
FastClick.attach(document.body);

//引入 图标css
import './assets/css/iconfont.css'
// import './assets/images/'


//vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//Lazyload 懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
