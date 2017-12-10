import axios from 'axios';

const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT"


const getSingleStudent = (student) => {
    return {
        type: GET_SINGLE_STUDENT,
        student
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

const singleStudentReducer = (state = {
    firstName: "",
    lastName: "",
    email: "",
    gpa: 0,
    campus: 0
}, action) => {

    switch (action.type) {

        case GET_SINGLE_STUDENT: 
            return action.student

        default:
            return state
    }
}

export default singleStudentReducer