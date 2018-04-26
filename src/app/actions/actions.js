
import axios from 'axios'
import {TASKS_GET_SUCCESS} from './types'

const tasksGet = () => (dispatch) => {
    dispatch({ type: TASKS_GET_SUCCESS })
  
    return axios({
      method: 'get',
      url: `http://localhost:9000/todolist`, // Please Allow-Control-Allow-Origin for test
    })
        .then(response => {
            console.log('response',response)
            dispatch({type: TASKS_GET_SUCCESS});
        })
        .catch((error) => {
            console.log('error', error);
        })
}

export{
    tasksGet
}