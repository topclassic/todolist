import React from "react"
import {FormTask} from "./FormTask"
import {ListTask} from "./ListTask"
import {ListTaskDone} from "./ListTaskDone"
import { tasksListGet, createTasks, removeTasks, updateTasks } from '../actions'
import { connect } from 'react-redux'

class MainTask extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            tasks:[],
            select: false
        }
    }
    updateTasks = (value,update) =>{
        const { updateTasksActions } = this.props
        const filtered = this.state.tasks
        filtered.splice(value, 1,update)
        updateTasksActions(filtered[value])
        this.setState({
            tasks: filtered
        })
    }
    addTasks = (tasks) => {
        const { createTasksActions } = this.props
        createTasksActions(tasks)
    }
    handleSelectList = () => {
        this.setState({
            select:false
        })
    }
    handleSelectTasksDone = () => {
        this.setState({
            select:true
        })
    }
    removeTasks = (value) => {
        const { removeTasksActions } = this.props
        const filtered = this.state.tasks
        removeTasksActions(filtered[value]._id)
        filtered.splice(value, 1);
        this.setState({
            tasks: filtered
        })
    }
    componentDidMount() {
        const { tasksListGetActions } = this.props
        tasksListGetActions()

        let tasksList = localStorage.getItem('tasks')
        let tasksDoneList = localStorage.getItem('tasksDone')
        if (tasksList) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        const { tasksList: preTasksList, tasksListGetActions } = this.props
        const { tasksList: nxtTasksList } = nextProps

        if (nxtTasksList && (preTasksList !== nxtTasksList)){
            this.setState({
                tasks: nxtTasksList
            })
        }
    }
    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    render() {
        let content = ""
        if(this.state.select){
            content =
                <div>
                    <div className="center">
                        <p className="p"> list complete </p>
                    </div>
                    <br/>
                    <ListTaskDone addTasks={this.addTasks} tasksDone={this.state.tasks} removeTasksDone={this.removeTasks}/>
                </div>
        }else{
            content =
                <div>
                    <div className="center">
                        <p className="p"> list </p>
                    </div>
                    <br/>
                    <ListTask tasks={this.state.tasks} removeTasks={this.removeTasks} updateTasks={this.updateTasks}/>
                    <FormTask addTasks={this.addTasks} />
                </div>
        }
        return (
            <div>
                <nav>
                    <ul>
                        <li><a onClick={this.handleSelectTasksDone} className="glyOkCircle" href="#">
                            <span className="glyphicon glyphicon-ok-circle"></span> Task Done</a>
                        </li>
                        <li><a onClick={this.handleSelectList} className="glyList" href="#">
                            <span className="glyphicon glyphicon-list-alt"></span> List </a>
                        </li>
                    </ul>
                </nav>
                <br/>
                {content}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    tasksList: state.tasksReducer.data,
  })
  const mapDispatchToProps = dispatch => ({
    tasksListGetActions: () => dispatch(tasksListGet()),
    createTasksActions: (tasks) => dispatch(createTasks(tasks)),
    removeTasksActions: (id) => dispatch(removeTasks(id)),
    updateTasksActions: (tasks) => dispatch(updateTasks(tasks))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainTask)