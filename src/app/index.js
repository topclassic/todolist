import React from "react"
import ReactDOM from "react-dom"
import { Header } from "./components/header"

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <br/>
                    <Header/>
                </div>
                <div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<div> <App/> </div>,document.getElementById('todoList'))