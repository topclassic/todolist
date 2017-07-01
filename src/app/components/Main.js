import React from "react";

export class Main extends React.Component{

    

    render(){
        return(
            <div>
                <p> list task </p>

                <a href="#" className="addTask" ><span className="glyphicon glyphicon-plus"></span> &nbsp; Add Task </a>

                <div className="center">
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
                                <button type="button" className="btn btn-default">
                                    Add Task
                                </button>
                                <button type="button" className="btn btn-link">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                </div>
            </div>
        )
    }
}