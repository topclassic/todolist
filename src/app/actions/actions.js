
import axios from 'axios'
import {
    TASKS_GET_SUCCESS,
    TASKS_POST_SUCCESS,
    TASKS_DELETE_SUCCESS,
    TASKS_UPDATE_SUCCESS
} from './types'

const tasksListGet = () => (dispatch) => {  
    return axios({
      method: 'get',
      url: `http://localhost:9000/getAllTasks`
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
        url: `http://localhost:9000/addNewTask`,
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
        url: `http://localhost:9000/deleteTask/${$oid}`,
    }) 
        .then(response => {
            dispatch({type: TASKS_DELETE_SUCCESS, create: response.data})
        })
        .catch((error) => {
            alert(error)
        })    
}

const updateTasks = (tasks) => (dispatch) => {
    const {
        _id,
        title,
        date,
        description,
        tasksComplete
    } = tasks
    const { $oid } = _id
    return axios({
        method: 'put',
        url: ` http://localhost:9000/updateTask/${$oid}`,
        data: {
            title,
            date,
            description,
            tasksComplete
        }
    })
        .then(response =>{
            dispatch({type: TASKS_UPDATE_SUCCESS, update: response.data})
        })
        .catch((error) =>{
            alert(error)
        })
}

export{
    tasksListGet,
    createTasks,
    removeTasks,
    updateTasks
}