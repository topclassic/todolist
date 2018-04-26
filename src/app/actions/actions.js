
import axios from 'axios'
import {TASKS_GET_SUCCESS} from './types'

const tasksListGet = () => (dispatch) => {  
    return axios({
      method: 'get',
      url: `http://localhost:9000/todolist`, // Please Allow-Control-Allow-Origin for test
    })
        .then(response => {
            console.log('response',response)
            dispatch({type: TASKS_GET_SUCCESS, data: response.data});
        })
        .catch((error) => {
            console.log('error', error);
        })
}

export{
    tasksListGet
}