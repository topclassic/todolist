import React from "react";
import {UpdateTasks} from "./UpdateTasks";

export class ListTask extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            task: "",
            title:""
        }
    }
    render() {

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            {this.props.tasks.map((tasks,key) => <li value={key} key={key}  onClick={this.handle}>
                                {key} <UpdateTasks title={tasks.title}/> {tasks.description} {tasks.date}
                                </li>)}
                        </td>

                    </tr>
                    </tbody>
                </table>

            </div>


        )
    }
    handle = (task) => {
        this.setState({
            task: task.target.value,
        })
    }

    handleRemove = () => {
        this.props.removeTasks(this.state.task)
    }
}
