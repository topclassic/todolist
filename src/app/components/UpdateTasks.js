import React from "react";

export class UpdateTasks extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            edit: false,
            addDesc: false,
            title: props.title,
            date: props.date,
            description: props.description
        }
    }
    addDesc = () =>{
        this.setState({
            addDesc: !this.state.addDesc
        })
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
                                <br/>
                                <button onClick={this.cancelTask} value="Add" type="button" className="btn btn-success btn-xs">Update
                                </button>
                                <button type="button" onClick={this.cancelTask} className="btn btn-link btn-xs">
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
        let contentDesc = ""
        if(this.state.addDesc){
            contentDesc = <div><textarea onClick={this.handle} value={this.state.description} ref="description" onChange={this.inputText} rows="4" cols="66" placeholder="description.."></textarea></div>
        }else{
            contentDesc = ""
        }
        return(

            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            Task&nbsp;ID&nbsp;:&nbsp;&nbsp;
                            {this.props.index}
                            &nbsp;&nbsp;&nbsp;
                            Date&nbsp;:&nbsp;&nbsp;
                            <input ref="date" type="text" className="textUpdate" value={this.state.date} onClick={this.handle} onChange={this.handleUpdate}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Tittle&nbsp;:&nbsp;&nbsp;
                            <input type="text" className="textUpdate" value={this.state.title} onClick={this.handle} onChange={this.handleUpdate} size="52"/>
                        </td>
                        <td>
                            <a onClick={this.addDesc} width="50" href="#" className="glyDesc" >
                                <span className="glyphicon glyphicon-comment"></span></a>

                        </td>
                        <td>
                            <a onClick={this.handleRemove} width="50" href="#" className="glyDelete" >
                                <span className="glyphicon glyphicon-trash"></span></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                {contentDesc}
                {content}
            </div>
        )
    }
    handleRemove = () => {
        this.props.remove(this.props.index)
    }
    handleUpdate = (e) => {
        this.setState({
            title: e.target.value,
            date: this.refs.date.value,
            description: this.refs.description
        })
    }
    handle = () => {
        this.setState({
            edit: true
        })
    }
}