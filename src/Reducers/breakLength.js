import { INCREMENT, DECREMENT } from '../Actions/breakLength'

const breakReducer = (state = 0, action) => {
  switch(action.type) {
  case INCREMENT:
    return state + 1
  case DECREMENT:
    if (state) return state - 1
  default:
    return state
  }
}

export default breakReducer
