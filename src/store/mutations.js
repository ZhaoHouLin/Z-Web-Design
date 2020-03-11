import Vue from 'vue'

export default {
  changeCodeData(state, payload) {
    Vue.set(state.colorHexData, payload.id, payload.hexCode)
  },
  openOrNot(state, turn) {
    state.open = turn
  }
}