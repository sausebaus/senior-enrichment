import axios from 'axios';

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";


const getCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}


export const fetchCampuses = () => {
    return function (dispatch) {
        axios.get('/api/campuses')
        .then(response => {
            dispatch(getCampuses(response.data));
        })
        .catch(console.error);
    }
}


const campusReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CAMPUSES: 
            return action.campuses
        default:
            return state
    }
}

export default campusReducer