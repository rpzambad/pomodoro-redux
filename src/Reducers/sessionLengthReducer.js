import { INCREMENT, DECREMENT } from '../Actions/breakLength'

const sessionReducer = (state = 5, action) => {
  switch(action.type) {
  case INCREMENT:
    return state + 1
  case DECREMENT:
    if (state) return state - 1
  default:
    return state
  }
}

export default sessionReducer
