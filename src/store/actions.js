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

  dmOpenOrNot: ({ commit, state }) => {
    commit('dmOpenOrNot', !state.dmOpen)
  },

  setShape: ({commit},{width,height,bdrs}) => {
    commit('setShape',{
      width,
      height,
      bdrs
    })
  },

  setCount: ({commit},count) => {
    commit('setCount',count)
  },
  
}
