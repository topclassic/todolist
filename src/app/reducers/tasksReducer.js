import {TASKS_GET_SUCCESS} from '../actions/types'

const INITIALSTATE = {
    data:[]
}

export default (state = INITIALSTATE, action) => {
    switch(action.type){
        case TASKS_GET_SUCCESS:
        console.log('action.data', action.data)
            return{
                ...state,
                data: action.data
            }
        default:
            return state
    }
}