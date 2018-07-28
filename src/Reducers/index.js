import { combineReducers } from 'redux'
import breakReducer from './breakLengthReducer'
import sessionReducer from './sessionLengthReducer'

export default combineReducers({
  breakReducer: breakReducer,
  sessionReducer: sessionReducer,
})
