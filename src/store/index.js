import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let city= "北京"

if(localStorage.city){
    city=localStorage.city
}

export default new Vuex.Store({
  state: {
    city
  },
  mutations: {
    changeCity(state,name){
      state.city = name
      localStorage.city = name
    }
  },
  actions: {
  },
  modules: {
  }
})
