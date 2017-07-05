import React from "react"
import ReactDOM from "react-dom"
import { MainTask } from "./components/MainTask"

class App extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <MainTask/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<div> <App/> </div>,document.getElementById('todoList'))