import React from "react";
import {FormTask} from "./FormTask";
import {ListTask} from "./ListTask";
import {ListTaskDone} from "./ListTaskDone";

export class MainTask extends React.Component{

    constructor(props) {
        super(props)
        this.state ={
            tasks:[],
            tasksDone:[],
            select: false
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
        let tasksDoneList = localStorage.getItem('tasksDone')
        if (tasksList) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            })
        }
        if(tasksDoneList){
            this.setState({
                tasksDone: JSON.parse(localStorage.getItem('tasksDone'))
            })
        }
    }
    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        localStorage.setItem('tasksDone', JSON.stringify(this.state.tasksDone))
    }

    render() {
        let content = ""
        if(this.state.select){
            content =
                <div>
                    <ListTaskDone tasksDone={this.state.tasksDone}/>
                </div>
        }else{
            content =
                <div>
                    <ListTask addTasksDone={this.addTasksDone} tasks={this.state.tasks}
                              removeTasks={this.removeTasks.bind(this)} updateTasks={this.updateTasks.bind(this)}/>
                    <FormTask addTasks={this.addTasks.bind(this)} />
                </div>
        }
        return (

            <div>
                <nav>
                    <ul>
                        <li><a className="glyOkCircle" href="#"><span className="glyphicon glyphicon-ok-circle"></span> Task Done</a></li>
                        <li><a className="glyList" href="#"><span className="glyphicon glyphicon-list-alt"></span> List </a></li>
                    </ul>
                </nav>
                <br/>
                <div className="center">
                    <p className="p"> list </p>

                </div>
                <br/>
                {content}
            </div>
        )
    }
}