import React from "react"
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

export class FormTask extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: moment(),
            add: false,
            addDesc: false,
            description:""
        }
    }
    handleChange = (date) => {
        this.setState({
            date: date
        });
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
        let date = this.state.date.calendar()
        title && date && this.props.addTasks({title,description,date})
        this.refs.title.value = ""
        this.state.date = moment()
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
                                <input type="text" placeholder="title task.." size="40"
                                       ref="title" />
                            </td>
                            <td>
                                <DatePicker selected={this.state.date} onChange={this.handleChange}/>
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
