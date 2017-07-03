import React from "react";

export class ListTask extends React.Component{

    render() {

        return (
            <div>
                {this.props.tasks.map((tasks,key) => <li key={key} onClick={this.handleRemove.bind(this)}> {key}{tasks.title} {tasks.date}</li>)}
            </div>

        )
    }
    handleRemove(task) {
        this.props.removeTasks(task.currentTarget.innerText)
    }

}
