import { INCREMENT, DECREMENT } from '../Actions/breakLength'

const breakReducer = (state = 300, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 60
    case DECREMENT:
      if (state) return state - 60
    default:
      return state
  }
}

export default breakReducer
