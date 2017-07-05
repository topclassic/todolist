import React from "react";

export class UpdateTasks extends React.Component{

    constructor(props){
        super(props)
        this.state = {
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
                <input type="text" value={this.props.title} onClick={this.handle} onChange={this.handleUpdate}/>
                <a onClick={this.addDesc} width="50" href="#" className="glyDesc" >
                    <span className="glyphicon glyphicon-comment"></span></a>
                <a onClick={this.handleRemove} width="50" href="#" className="glyDelete" >
                    <span className="glyphicon glyphicon-trash"></span></a>
                {content}
            </div>
        )
    }
    handleRemove = () => {
        this.props.remove(this.props.key)
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