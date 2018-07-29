export const INCREMENT = 'INCREMENT_SESSION'
export const DECREMENT = 'DECREMENT_SESSION'

export const increaseSessionTime = () => {
  return {
    type: INCREMENT,
  }
}

export const decreaseSessionTime = () => {
  return {
    type: DECREMENT,
  }
}
