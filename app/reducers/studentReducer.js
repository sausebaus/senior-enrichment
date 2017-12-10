import axios from 'axios';

const GET_STUDENTS = "GET_STUDENTS";
const GET_CAMPUS_STUDENTS = "GET_CAMPUS_STUDENTS"
const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT"

const getStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    }
}

const getCampusStudents = (students) => {
    return {
        type: GET_CAMPUS_STUDENTS,
        students
    }
}

const getSingleStudent = (students) => {
    return {
        type: GET_SINGLE_STUDENT,
        students
    }
}

export const fetchCampusStudents = (id) => {
    return function (dispatch) {
        axios.get('/api/campuses/'+id)
        .then(response => {
            dispatch(getCampusStudents(response.data))
        })
        .catch(console.error)
    }
}

export const fetchStudents = () => {
    return function (dispatch) {
        axios.get('/api/students')
        .then(response => {
            dispatch(getStudents(response.data));
        })
        .catch(console.error);
    }
}



export const fetchSingleStudent = (id) => {
    return function (dispatch) {
        axios.get('/api/students/'+id)
        .then(response => {
            dispatch(getSingleStudent(response.data))
        }) 
    }
}

const studentReducer = (state = [], action) => {
    switch (action.type) {

        case GET_STUDENTS: 
            return action.students

        case GET_CAMPUS_STUDENTS:
            return action.students

        default:
            return state
    }
}

export default studentReducer