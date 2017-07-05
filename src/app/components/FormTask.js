import React from "react"

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
        this.setState({
            addDesc: !this.state.addDesc
        })
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
        !title || !date ? alert("Please enter title and date"):

        this.refs.title.value = ""
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
            <div className="center">
                <a href="#" onClick={this.addTask} className="addTask" ><span className="glyphicon glyphicon-plus"></span>
                    &nbsp; Add Task </a>
            </div>
        )
    }
    renderEnterTask(){
        let content = ""
        if(this.state.addDesc){
            content = <div><textarea onChange={this.inputText} rows="4" cols="66" placeholder="description.."></textarea></div>
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
                                <input className="inputText" type="text" placeholder="title task.." size="40"
                                       ref="title" />
                            </td>
                            <td>
                                <input type="date" ref="date" className="inputText"/>
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
                                <button onClick={this.enterTask} value="Add" type="button" className="btn btn-success">Add Task
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
