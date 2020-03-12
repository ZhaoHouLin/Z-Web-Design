import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  colors: {
    R: 0,
    G: 0,
    B: 0
  },

  colorHexData: ["00", "00", "00"],
  hexCode: "#",
  open: false
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  
  modules: {
    
  }

})
