import React from "react";

export class UpdateTasks extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            edit: false,
            addDesc: false,
            taskDone: false,
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
    taskDone = () =>{
        this.setState({
            taskDone: true
        })
    }
    renderTaskDone(){
        return(
        <div>
            <table>
                <tbody>
                <tr>
                    <td>
                        <a  width="50" href="#" className="glyOk" >
                            <span className="glyphicon glyphicon-ok"></span></a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        )
    }
    renderShowTask(){
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
            contentDesc = <div><textarea onClick={this.handle} value={this.state.description} onChange={this.handleUpdate} rows="4" cols="66" placeholder="description.."></textarea></div>
        }else{
            contentDesc = ""
        }

        return(

            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <a onClick={this.taskDone} width="50" href="#" className="glyUnchecked" >
                                <span className="glyphicon glyphicon-unchecked"></span></a>

                        </td>
                        <td className="td">
                            Task&nbsp;ID&nbsp;:&nbsp;&nbsp;
                            {this.props.index}
                            &nbsp;&nbsp;&nbsp;
                            Date&nbsp;:&nbsp;&nbsp;
                            <input ref="date" type="text" className="textUpdate" value={this.state.date} onClick={this.handle} onChange={this.handleUpdate}/>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td className="td">
                            Tittle&nbsp;:&nbsp;&nbsp;
                            <input ref="title" type="text" className="textUpdate" value={this.state.title} onClick={this.handle} onChange={this.handleUpdate} size="52"/>
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
                    <tr>
                        <td>

                        </td>
                        <td className="td">
                            {contentDesc}
                            {content}
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
    handleUpdate = (e) => {
        this.setState({
            title: this.refs.title.value,
            date: this.refs.date.value,
            description: e.target.value
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            title: nextProps.title,
            description: nextProps.description,
            date: nextProps.date
        })
    }
    handle = () => {
        this.setState({
            edit: true

        })
    }
    render(){

        if(this.state.taskDone){
            return this.renderTaskDone()
        }else{
            return this.renderShowTask()
        }

    }
}