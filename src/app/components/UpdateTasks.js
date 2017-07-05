import React from "react";

export class UpdateTasks extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            edit: false,
            addDesc: false,
            taskDone: false,

            taskUpdate:{
                title: props.title,
                date: props.date,
                description: props.description
            }
        }

    }
    addDesc = () =>{
        this.setState({
            addDesc: !this.state.addDesc
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
                                <button onClick={this.handleUpdate} value="Add" type="button" className="btn btn-success btn-sm">Update
                                </button>
                                <button type="button" onClick={this.handleCancel} className="btn btn-link btn-sm">
                                    Cancel
                                </button>
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
            contentDesc = <div><textarea ref="description" onClick={this.handleClick} value={this.state.taskUpdate.description} onChange={this.handle} rows="4" cols="64" placeholder="description.."></textarea></div>
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
                            <input ref="date" type="text" className="textUpdate" value={this.state.taskUpdate.date} onClick={this.handleClick} onChange={this.handle}/>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td className="td">
                            Tittle&nbsp;:&nbsp;&nbsp;
                            <input ref="title" type="text" className="textUpdate" value={this.state.taskUpdate.title} onClick={this.handleClick} onChange={this.handle} size="52"/>
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
    handleCancel = () =>{
        this.setState({
            edit: false
        })
    }
    handleUpdate = () => {
        this.setState({
            edit: false
        })
        this.props.update(this.props.index,this.state.taskUpdate)
    }
    handle = (e) => {
        this.setState({
            taskUpdate:{
                title: this.refs.title.value,
                date: this.refs.date.value,
                description: this.refs.description.value
            }
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            taskUpdate:{
                title: nextProps.title,
                date: nextProps.date,
                description: nextProps.description
            }
        })
    }
    handleClick = () => {
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