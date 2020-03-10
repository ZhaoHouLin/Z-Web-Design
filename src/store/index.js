import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: {
      R: 0,
      G: 0,
      B: 0
    },
    colorData: ["00","00","00"],
    hexCode: "#",
    open: false
  },
  mutations: {
    changeColor(state,payload) {
      Vue.set(state.colorData, payload.id, payload.num)
    },  
    openOrNot(state,o) {
      state.open = o
      console.log(state.open)
    } 
  },
  getters: {
    colorCode(state) {
      state.hexCode = "#"
      state.hexCode += state.colorData.join('')
      return state.hexCode
    },
    bgc(state) {
      return {
        "background-color": `${state.hexCode}`
      }
    },
    fontColor(state) {
      return {
        "color": `${state.hexCode}`
      }
    },
    boderColor(state) {
      return {
        "border-color": `${state.hexCode}`
      }
    },
    openSetting(state) {
      if (state.open) {
        return {

        }
      }
    }
  },
  actions: {
    
  },
  modules: {
    
  }
})
