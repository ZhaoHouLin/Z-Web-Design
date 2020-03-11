export default {
  changeCode: ({ commit }, { hexCode, id }) => {
    commit('changeCodeData', {
      hexCode,
      id 
    })
  },

  openOrNot: ({ commit, state }) => {
    commit('openOrNot', !state.open)
  }, 
}
