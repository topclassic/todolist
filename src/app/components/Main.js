import React from "react";

export class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            add: false,
            newTasks: ""
        }
    }

    addTask = () =>{
        this.setState({
            add: true

        })
    }
    enterTask = () =>{
        this.props.setTasks(this.state.newTasks)
        this.setState({
            add: false,
            newTasks:""

        })
    }
    renderAddTask(){
        return(
            <div>
                <p> list task </p>
                <a href="#" onClick={this.addTask} className="addTask" ><span className="glyphicon glyphicon-plus"></span>
                    &nbsp; Add Task </a>
            </div>
        )
    }
    renderEnterTask(){
        return(
            <div className="center">
                <p> list task </p>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="enter task.." size="40"
                                       value={this.state.newTasks} onChange={(t)=>this.setState({newTasks: t.target.value})}/>
                            </td>
                            <td>
                                <input type="text" placeholder="schedule" size="10"/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <button onClick={this.enterTask} type="button" className="btn btn-default">Add Task
                                </button>
                                <button type="button" onClick={this.enterTask} className="btn btn-link">
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