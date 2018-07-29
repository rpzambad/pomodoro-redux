import { START, PAUSE } from  '../Actions/clockActions'

const clockReducer = (state = 1000, action) => {
  switch(action.type) {
    case START:
      if (state) return state - 1
    case PAUSE:
      return state
    default:
      return state
  }
}

export default clockReducer
