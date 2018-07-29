import { combineReducers } from 'redux'
import breakReducer from './breakLengthReducer'
import sessionReducer from './sessionLengthReducer'
import clockReducer from './clockReducer'

export default combineReducers({
  breakReducer: breakReducer,
  sessionReducer: sessionReducer,
  clockReducer: clockReducer,
})
