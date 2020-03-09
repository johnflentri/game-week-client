import { combineReducers } from 'redux'
import userReducer from './user'
import scoreReducer from './score'
import channelReducer from './channels'

export default combineReducers({
  userReducer,
  scoreReducer,
  channelReducer
})