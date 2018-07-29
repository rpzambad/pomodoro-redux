import { INCREMENT, DECREMENT } from '../Actions/sessionLength'

const sessionReducer = (state = 600, action) => {
  switch(action.type) {
  case INCREMENT:
    return state + 60
  case DECREMENT:
    if (state) return state - 60
  default:
    return state
  }
}

export default sessionReducer
