import { combineReducers } from 'redux'
import userReducer from './user'
import scoreReducer from './score'

export default combineReducers({
  userReducer,
  scoreReducer
})