import React from "react";

export class ListTask extends React.Component{

    constructor(props){
        super(props)
        this.state={
            done: false
        }
    }
    render() {
        return (
            <div>
                <ul>

                    {
                        this.props.tasks.map((todo,key) => <li key={key}>{todo}</li>)
                    }

                </ul>
            </div>
        )
    }


}