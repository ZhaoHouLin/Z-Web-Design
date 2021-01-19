import Vue from 'vue'

export default {
  changeCodeData(state, payload) {
    Vue.set(state.colorHexData, payload.id, payload.hexCode)
  },
  openOrNot(state, turn) {
    state.open = turn
  },
  dmOpenOrNot(state, turn) {
    state.dmOpen = turn
  },
  setShape(state, payload) {
    state.width = payload.width
    state.height = payload.height
    state.bdrs = payload.bdrs
  },
  setCount(state, count) {
    state.count += count
    if (state.count > 1) state.count = 0
    if (state.count < 0) state.count = 1
  }
}