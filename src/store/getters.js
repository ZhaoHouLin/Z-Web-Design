export default {
  colorCode(state) {
    state.hexCode = "#"
    state.hexCode += state.colorHexData.join('')
    return state.hexCode
  },
  bgc(state) {
    return {
      "background-color": `${state.hexCode}`
    }
  },
  fontColor(state) {
    return {
      "color": `${state.hexCode}`
    }
  },
  boderColor(state) {
    return {
      "border-color": `${state.hexCode}`
    }
  }
}