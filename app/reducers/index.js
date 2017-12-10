/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import campusReducer from './campusReducer'
import singleStudentReducer from './singleStudentReducer'
import singleCampusReducer from './singleCampusReducer'

const initialState = {}


const mainReducer = combineReducers({
  students: studentReducer,
  student: singleStudentReducer,
  campuses: campusReducer,
  campus: singleCampusReducer
});


export default mainReducer
