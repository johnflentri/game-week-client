import { ALL_CHANNELS } from '../actions/actions'

export default function (state = [], action) {
  // console.log('action test CHANNELS:', action)
  switch (action.type) {
    case ALL_CHANNELS:
      return state
    case "NEW_CHANNEL":
      return [...state, action.payload]
    default:
      return state
  }
}