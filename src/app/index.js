import React from "react"
import ReactDOM from "react-dom"
import MainTask from "./components/MainTask"
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'

class App extends React.Component {
    render() {
        const stores = createStore(reducer, {}, applyMiddleware(ReduxThunk))
        return (
            <div>
                <div>
                    <Provider store={stores}>
                        <MainTask/>
                    </Provider>    
                </div>
            </div>
        )
    }
}
ReactDOM.render(<div> <App/> </div>,document.getElementById('todoList'))