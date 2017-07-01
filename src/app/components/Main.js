import React from "react";

export class Main extends React.Component{

    constructor(props){
        super()
        this.state = {
            tasks: false
        }
    }

    addTask = () =>{
        this.setState({
            tasks: true
        })
    }
    enterTask = () =>{
        this.setState({
            tasks: false
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
                                <input type="text" placeholder="enter task.." size="40"/>
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
        if(this.state.tasks){
            return this.renderEnterTask()
        }else{
            return this.renderAddTask()
        }
    }
}