import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  colors: {
    R: 255,
    G: 255,
    B: 255
  },

  colorHexData: ["ff", "ff", "ff"],
  hexCode: "#",
  open: false,
  dmOpen: false,
  dmCover:'',
  dms: null,
  width: '',
  height: '',
  bdrs:'',
  count: 0
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  
  modules: {
    
  }

})
