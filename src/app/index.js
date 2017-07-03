import React from "react"
import ReactDOM from "react-dom"
import { Header } from "./components/header"
import { MainTask } from "./components/MainTask"

class App extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            tasks: []
        }
        this.addTasks = this.addTasks.bind(this)
    }



    addTasks(newTasks){
        this.setState({
            tasks: this.state.tasks.concat([newTasks])
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <br/>
                <div>
                    <p> list task </p>

                </div>
                <br/>
                <div>
                    <MainTask/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<div> <App/> </div>,document.getElementById('todoList'))