
import axios from 'axios'
import {
    TASKS_GET_SUCCESS,
    TASKS_POST_SUCCESS,
    TASKS_DELETE_SUCCESS
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

const removeTasks = (id) => (dispatch) => {
    const { $oid } = id
    return axios({
        method: 'delete',
        url: `http://localhost:9000/removetasks/${$oid}`,
    }) 
        .then(response => {
            dispatch({type: TASKS_DELETE_SUCCESS, create: response.data})
        })
        .catch((error) => {
            alert(error)
    })    
}

export{
    tasksListGet,
    createTasks,
    removeTasks
}