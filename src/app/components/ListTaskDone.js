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
                            {this.props.tasksDone.map((tasksDone,key) => <li className="li" key={key} >
                                <CompleteTasks title={tasksDone.title} date={tasksDone.date}/>
                                <hr/>
                            </li>)}
                        </td>

                    </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}