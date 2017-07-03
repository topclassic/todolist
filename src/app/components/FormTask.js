import React from "react";

export class FormTask extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            add: false,

        }
    }
    addTask = () =>{
        this.setState({
            add: true

        })
    }
    enterTask = (e) =>{
        e.preventDefault()
        this.setState({
            add: false
        })

        let title = this.refs.title.value
        let date = this.refs.date.value
        title && date && this.props.addTasks({title,date})
        this.refs.title.value = ""
        this.refs.date.value = ""
    }

    cancelTask = () =>{
        this.setState({
            add: false,
        })
    }

    renderAddTask(){
        return(
            <div>
                <a href="#" onClick={this.addTask} className="addTask" ><span className="glyphicon glyphicon-plus"></span>
                    &nbsp; Add Task </a>
            </div>
        )
    }
    renderEnterTask(){
        return(
            <div className="center">
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="enter task.." size="40"
                                       ref="title" />
                            </td>
                            <td>
                                <input type="text" placeholder="schedule" size="10"
                                       ref="date" />
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <button onClick={this.enterTask} value="Add" type="button" className="btn btn-default">Add Task
                                </button>
                                <button type="button" onClick={this.cancelTask} className="btn btn-link">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
    render(){
        if(this.state.add){
            return this.renderEnterTask()
        }else{
            return this.renderAddTask()
        }
    }
}