import React from "react";
import {FormTask} from "./FormTask";
import {ListTask} from "./ListTask";

export class MainTask extends React.Component{

    constructor(props) {
        super(props)
        this.state ={
            tasks:[],
            tasksDone:[]
        }
    }
    updateTasks(value,update){
        let filtered = this.state.tasks
        filtered.splice(value, 1,update);
        this.setState({
            tasks: filtered
        })
    }
    addTasksDone = (tasksDone) => {
        this.setState({
            tasksDone: this.state.tasksDone.concat(tasksDone)
        })
    }
    addTasks(tasks) {
        this.setState({
            tasks: this.state.tasks.concat(tasks)
        })
    }
    removeTasks(value) {

        let filtered = this.state.tasks
        filtered.splice(value, 1);
        this.setState({
            tasks: filtered
        })
    }
    componentDidMount() {
        let tasksList = localStorage.getItem('tasks')
        if (tasksList) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            })
        }
    }
    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    render() {

        return (

            <div>
                <nav>
                    <ul>
                        <p className="p1">todo list application</p>

                    </ul>

                </nav>
                <br/>
                <div className="center">
                    <p className="p"> list </p>

                </div>
                <br/>
                <ListTask addTasksDone={this.addTasksDone} tasks={this.state.tasks} removeTasks={this.removeTasks.bind(this)} updateTasks={this.updateTasks.bind(this)}/>
                <FormTask addTasks={this.addTasks.bind(this)} />
            </div>
        )
    }
}