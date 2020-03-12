import { ALL_IMAGES, NEW_IMAGE } from '../actions/actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_IMAGES:
      console.log("Inside image.js, case ALL_IMAGES receives the action and returns action.payload, which is sent to the store", action)
      return action.payload
    case NEW_IMAGE:
      return [action.payload, ...state];
    default:
      return state
  }
}