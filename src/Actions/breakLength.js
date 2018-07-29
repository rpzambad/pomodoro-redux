export const INCREMENT = 'INCREMENT_BREAK'
export const DECREMENT = 'DECREMEN_BREAK'

export const increaseBreakTime = () => {
  return {
    type: INCREMENT,
  }
}

export const decreaseBreakTime = () => {
  return {
    type: DECREMENT,
  }
}
