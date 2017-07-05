import React from "react";
import {UpdateTasks} from "./UpdateTasks";

export class ListTask extends React.Component{

    constructor(props){
        super(props)
        this.state = {
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
                            {this.props.tasks.map((tasks,key) => <li value={key} key={key} >
                                <UpdateTasks index={key} remove={this.handleRemove} title={tasks.title} date={tasks.date}
                                description={tasks.description}/>
                                <hr/>
                                </li>)}
                        </td>

                    </tr>
                    </tbody>
                </table>

            </div>
        )
    }
    handleRemove = (value) => {
        this.props.removeTasks(value)
    }
}
