import React from "react";


export class FormTask extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            add: false,
            addDesc: false,
            description:""
        }
    }
    addTask = () =>{
        this.setState({
            add: true

        })
    }
    addDesc = () =>{
        if(this.state.addDesc){
            this.setState({
                addDesc:  false
            })
        }else{
            this.setState({
                addDesc:  true
            })
        }
    }
    enterTask = (e) =>{
        e.preventDefault()
        this.setState({
            add: false,
            addDesc: false
        })

        let title = this.refs.title.value
        let description = this.state.description
        let date = this.refs.date.value
        title && date && this.props.addTasks({title,description,date})
        this.refs.title.value = ""
        this.refs.date.value = ""
        this.state.description = ""
    }

    cancelTask = () =>{
        this.setState({
            add: false,
            addDesc: false
        })
    }
    inputText = (e) =>{
        e.preventDefault()
        this.setState({
            description: e.target.value
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
        let content = ""
        if(this.state.addDesc){
            content = <div><input onChange={this.inputText} type="text" placeholder="description" size="10"/></div>
        }else{
            content = ""
        }
        return(
            <div className="center">
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="title task.." size="40"
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
                                {content}
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
                            <td>
                                <a onClick={this.addDesc} width="50" href="#" className="addDesc" >
                                    <span className="glyphicon glyphicon-comment"></span></a>
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
