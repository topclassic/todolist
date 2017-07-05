import React from "react";
import {CompleteTasks} from "./CompleteTasks";

export class ListTaskDone extends React.Component{

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            {this.props.tasksDone.map((tasksDone,key) => <li className="liTasksDone" key={key} >
                                <CompleteTasks index={key} title={tasksDone.title} date={tasksDone.date}
                                               description={tasksDone.description}
                                               repeatTasks={this.repeatTasks} remove={this.removeTasksDone}/>
                                <hr/>
                            </li>)}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    removeTasksDone = (value) => {
        this.props.removeTasksDone(value)
    }
    repeatTasks = (value) => {
        this.props.addTasks(value)
    }
}