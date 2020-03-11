export default {
  changeColor: ({ commit }, code, id) => {
    commit('changeColor', { num: this.numToHex(+code), id: id })
  },

  openOrNot: ({ commit, state }) => {
    commit('openOrNot', !state.open)
  },

  numToHex(num) {
    num = num.toString(16);
    if (num.length < 2) {
      num = "0" + num;
    }
    return num
  }
}
