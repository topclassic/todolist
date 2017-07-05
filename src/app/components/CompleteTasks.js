import React from "react";

export class CompleteTasks extends React.Component{

    render() {
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <a href="#" className="glyOk" >
                                <span className="glyphicon glyphicon-ok"></span></a>
                        </td>
                        <td className="td">
                            <label>{this.props.date}</label>
                        </td>
                        <td className="td">
                            <label>{this.props.title}</label>
                        </td>
                        <td>
                            <a onClick={this.handleRemove} href="#" className="glyDelete" >
                                <span className="glyphicon glyphicon-trash"></span></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}