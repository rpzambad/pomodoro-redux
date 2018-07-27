import { combineReducers } from 'redux'
import breakReducer from './breakLength'

export default combineReducers({
  breakReducer: breakReducer,
})
