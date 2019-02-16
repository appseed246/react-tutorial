import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

// import comment from "./comment"
import user from "./user"

export default combineReducers({
  routing: routerReducer,
  user,
})