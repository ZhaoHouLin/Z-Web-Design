export default {
  changeCode: ({ commit }, { hexCode, id }) => {
    console.log(hexCode)
    commit('changeCodeData', {
      hexCode,
      id 
    })
  },

  openOrNot: ({ commit, state }) => {
    commit('openOrNot', !state.open)
  }, 
}
