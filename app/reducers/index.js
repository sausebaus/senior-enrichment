/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import campusReducer from './campusReducer'

const initialState = {}


const mainReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
});


export default mainReducer
