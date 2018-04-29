
import axios from 'axios'
import {
    TASKS_GET_SUCCESS,
    TASKS_POST_SUCCESS
} from './types'

const tasksListGet = () => (dispatch) => {  
    return axios({
      method: 'get',
      url: `http://localhost:9000/taskslist`
    })
        .then(response => {
            dispatch({type: TASKS_GET_SUCCESS, data: response.data});
        })
        .catch((error) => {
            alert(error)
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
            dispatch({type: TASKS_POST_SUCCESS, create: response.data})
        })
        .catch((error) => {
            alert(error.response.data)
    })
}

export{
    tasksListGet,
    createTasks
}