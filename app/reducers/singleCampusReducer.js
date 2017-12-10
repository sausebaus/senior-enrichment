import axios from 'axios';

const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS"

const getSingleCampus = (campus) => {
    return {
        type: GET_SINGLE_CAMPUS,
        campus
    }
}

export const fetchSingleCampus = (id) => {
    return function (dispatch) {
        axios.get('/api/singleCampus/'+id)
        .then(response => {
            dispatch(getSingleCampus(response.data))
        }) 
    }
}

const singleCampusReducer = (state = {
    name: "",
    imgUrl: "",
    description: ""
}, action) => {

    switch (action.type) {

        case GET_SINGLE_CAMPUS: 
            return action.campus

        default:
            return state
    }
}

export default singleCampusReducer