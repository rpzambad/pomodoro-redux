export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

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
