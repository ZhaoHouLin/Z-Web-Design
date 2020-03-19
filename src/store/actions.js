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
  
  loadDms(context) {
    axios.get('http://localhost:3000/dms')
      .then(res => {
        context.commit('setDms', res.data)
        // console.log(res)
      })
  }
}
