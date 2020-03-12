import { combineReducers } from 'redux'
import userReducer from './user'
import imageReducer from './image'

export default combineReducers({
  userReducer,
  imageReducer
})