import React from "react";
import {FormTask} from "./FormTask";
import {ListTask} from "./ListTask";

export class MainTask extends React.Component{

    constructor(props) {
        super(props)
        this.state ={
            tasks:[],
            update:[]
        }
    }
    updateTasks(update){
        this.setState({
            update: this.state.update.concat(update)
        })
    }
    addTasks(tasks) {

        this.setState({
            tasks: this.state.tasks.concat(tasks)
        })
    }
    removeTasks(value) {
        console.log(value)
        const char = [{title:"a",description:"b",date:"c"}]
        let filtered = this.state.tasks
        filtered.splice(value, 1);
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
                <ListTask tasks={this.state.tasks} removeTasks={this.removeTasks.bind(this)} updateTasks={this.updateTasks.bind(this)}/>
                <FormTask addTasks={this.addTasks.bind(this)} />
            </div>
        )
    }
}