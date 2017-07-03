import React from "react";
import {FormTask} from "./FormTask";
import {ListTask} from "./ListTask";

export class MainTask extends React.Component{

    constructor(props) {
        super(props)
        this.state ={
            tasks:[]
        }
    }
    addTasks(tasks) {

        this.setState({
            tasks: this.state.tasks.concat(tasks)
        })
    }
    removeTasks(value) {

        let filtered = this.state.tasks.filter((tasks) =>{
            return tasks !== value
        })
        this.setState({
            tasks: filtered
        })
    }
    componentWillMount() {
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
                <ListTask tasks={this.state.tasks} removeTasks={this.removeTasks.bind(this)} />
                <FormTask addTasks={this.addTasks.bind(this)} />
            </div>
        )
    }
}