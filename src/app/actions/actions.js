
import axios from 'axios'
import {TASKS_GET_SUCCESS} from './types'

const tasksListGet = () => (dispatch) => {  
    return axios({
      method: 'get',
      url: `http://localhost:9000/taskslist`
    })
        .then(response => {
            console.log('response',response)
            dispatch({type: TASKS_GET_SUCCESS, data: response.data});
        })
        .catch((error) => {
            console.log('error', error);
        })
}

const createTasks = (tasks) => (dispatch) =>{
    const {
        title,
        date,
        description,
        tasksComplete
    } = tasks
    return axios({
        method: 'post',
        withCredentials: true ,
        url: `http://localhost:9000/createtasks`,
        data: {
            title,
            date,
            description,
            tasksComplete
        }
    })
        .then(response => {
            console.log('response',response)
            // dispatch({type: TASKS_GET_SUCCESS, data: response.data});
        })
        .catch((error) => {
            console.log('error', error);
    })
}

export{
    tasksListGet,
    createTasks
}