import Vue from 'vue'

export default {
  changeColor(state, payload) {
    Vue.set(state.colorData, payload.id, payload.num)
  },
  openOrNot(state, turn) {
    state.open = turn
  }
}