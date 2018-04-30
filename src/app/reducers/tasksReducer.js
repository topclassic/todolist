import {
    TASKS_GET_SUCCESS,
    TASKS_POST_SUCCESS
} from '../actions/types'

const INITIALSTATE = {
    data:[],
}

export default (state = INITIALSTATE, action) => {
    switch(action.type){
        case TASKS_GET_SUCCESS:
            return{
                ...state,
                data: action.data
            }
        case TASKS_POST_SUCCESS:
            return{
                ...state,
                data: state.data.concat(action.create)
            }
        default:
            return state
    }
}