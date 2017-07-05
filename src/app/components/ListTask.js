import React from "react";
import {UpdateTasks} from "./UpdateTasks";

export class ListTask extends React.Component{

    render() {

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            {this.props.tasks.map((tasks,key) => <li className="li" key={key} >
                                <UpdateTasks index={key} update={this.updateTasks} remove={this.removeTasks} addTasksDone={this.addTasksDone}
                                             title={tasks.title} date={tasks.date} description={tasks.description}/>
                                <hr/>
                                </li>)}
                        </td>

                    </tr>
                    </tbody>
                </table>

            </div>
        )
    }
    removeTasks = (value) => {
        this.props.removeTasks(value)
    }
    updateTasks = (value,update) => {
        this.props.updateTasks(value,update)
    }
    addTasksDone = (value) => {
        this.props.addTasksDone(value)
    }
}
