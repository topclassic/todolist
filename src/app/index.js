import React from "react"
import ReactDOM from "react-dom"
import { Header } from "./components/header"
import { Main } from "./components/Main"
import { ListTask } from "./components/ListTask"

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
                    <ListTask tasks={this.state.tasks}/>
                    <Main setTasks={this.addTasks}/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<div> <App/> </div>,document.getElementById('todoList'))