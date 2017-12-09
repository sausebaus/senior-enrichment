import axios from 'axios';

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";


const getCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

const getSingleCampus = (campuses) => {
    return {
        type: GET_SINGLE_CAMPUS,
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

export const fetchSingleCampus = (id) => {
    return function (dispatch) {
        axios.get('/api/singleCampus/'+id)
        .then(response => {
            dispatch(getSingleCampus(response.data));
        })
        .catch(console.error);
    }
}

const campusReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CAMPUSES: 
            return action.campuses
        case GET_SINGLE_CAMPUS:
            return action.campuses
        default:
            return state
    }
}

export default campusReducer