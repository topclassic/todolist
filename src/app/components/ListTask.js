import React from "react";

export class ListTask extends React.Component{

    render() {

        let tasks = this.props.tasks.map((tasks, key) => {
            return <li key={key} onClick={this.handleRemove.bind(this)}>{tasks.title}{tasks.date}</li>
        })
        return (
            <ul>
                {tasks}
            </ul>
        )
    }
    handleRemove(task) {
        this.props.removeTasks(task.currentTarget.innerText)
    }

}