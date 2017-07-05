import React from "react";

export class UpdateTasks extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            edit: false
        }
    }
    cancelTask = () =>{
        this.setState({
            edit: false
        })
    }
    render(){
        let content = ""
        if(this.state.edit){
            content =
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <button onClick={this.cancelTask} value="Add" type="button" className="btn btn-default">Update
                                </button>
                                <button type="button" onClick={this.cancelTask} className="btn btn-link">
                                    Cancel
                                </button>
                            </td>
                            <td>
                                <a onClick={this.handleRemove} width="50" href="#" className="addDesc" >
                                    <span className="glyphicon glyphicon-trash"></span></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
        }else{
            content = ""
        }
        return(

            <div>
                <input type="text" value={this.state.title} onClick={this.handle} onChange={this.handleUpdate}/>{content}
            </div>
        )
    }
    handleUpdate = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
}