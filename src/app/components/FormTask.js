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
    inputText = (e) =>{
        e.preventDefault()
        this.setState({
            title: this.refs.title.value,
            date: this.refs.date.value
        })

    }
    enterTask = () =>{
        this.setState({
            add: false
        })

        let title = this.state.title
        let date = this.state.date
        title && date && this.props.addTasks({title,date})
        this.state.title = ""
        this.state.date = ""
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
                                       ref="title" onChange={this.inputText}/>
                            </td>
                            <td>
                                <input type="text" placeholder="schedule" size="10"
                                       ref="date" onChange={this.inputText}/>
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