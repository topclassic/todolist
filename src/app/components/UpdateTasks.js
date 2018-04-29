import React from "react";

export class UpdateTasks extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            edit: false,
            addDesc: false,

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
    addTaskDone = (e) =>{
        e.preventDefault()
        let title = this.props.title
        let date = this.props.date
        let description = this.props.description
        title && date && this.props.addTasksDone({title,date,description})
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
    handleDesc = (e) =>{
        this.setState({
            taskUpdate:{
                title: this.refs.title.value,
                date: this.refs.date.value,
                description: e.target.value
            }
        })
    }
    handle = () => {
        this.setState({
            taskUpdate:{
                title: this.refs.title.value,
                date: this.refs.date.value,
                description: this.props.description
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
            contentDesc = <div><textarea onClick={this.handleClick} value={this.state.taskUpdate.description} onChange={this.handleDesc} rows="4" cols="64" placeholder="description.."></textarea></div>
        }else{
            contentDesc = ""
        }

        return(

            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <a onClick={this.addTaskDone} width="50" href="#" className="glyUnchecked" >
                                <span className="glyphicon glyphicon-unchecked"></span></a>

                        </td>
                        <td className="td">
                            <label className="la">Task&nbsp;ID&nbsp;:</label>
                            <label className="la"> {this.props.index} </label>
                            <label className="la"> Date&nbsp;: </label>

                            <input ref="date" type="text" className="textUpdate" value={this.state.taskUpdate.date} onClick={this.handleClick} onChange={this.handle}/>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td className="td">
                            <label className="la">Tittle&nbsp;:</label>
                            <input ref="title" type="text" className="textUpdate" value={this.state.taskUpdate.title} onClick={this.handleClick} onChange={this.handle} size="52"/>
                        </td>
                        <td>
                            <a onClick={this.addDesc} href="#" className="glyDesc" >
                                <span className="glyphicon glyphicon-comment"></span></a>

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
                            {contentDesc}
                            {content}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )

    }
}