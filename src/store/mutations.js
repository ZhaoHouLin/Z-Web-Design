import Vue from 'vue'

export default {
  changeCodeData(state, payload) {
    Vue.set(state.colorHexData, payload.id, payload.hexCode)
  },
  openOrNot(state, turn) {
    state.open = turn
  },
  setDms(state,value) {
    state.dms = value
  },
  setShape(state, payload) {
    state.width = payload.width
    state.height = payload.height
    state.bdrs = payload.bdrs
  }
}