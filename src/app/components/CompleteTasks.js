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
                            <label className="la"> Date&nbsp;: </label>
                            <label className="lalLast">{this.props.date}</label>
                        </td>

                        <td>
                            <a onClick={this.handleRepeat} href="#" className="glyRepeat" >
                                <span className="glyphicon glyphicon-repeat"></span></a>
                        </td>
                        <td>
                            <a onClick={this.handleRemove} href="#" className="glyDelete" >
                                <span className="glyphicon glyphicon-trash"></span></a>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td className="td">
                            <label className="la"> Title&nbsp;: </label>
                            <label className="lalLast">{this.props.title}</label>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    handleRemove = () => {
        this.props.remove(this.props.index)
    }
    handleRepeat = (e) =>{
        e.preventDefault()
        let title = this.props.title
        let date = this.props.date
        let description = this.props.description
        title && date && this.props.repeatTasks({title,date,description, tasksComplete: false})
        this.props.remove(this.props.index)
    }
}