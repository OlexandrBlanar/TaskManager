import React from 'react';

import '../styles/Task.css';

class Task extends React.Component {
    render() {
        return (
            <li className={"task" + " " +  this.props.stateTask}>
              <label>
                <input type = "checkbox" onClick = {this.props.onCompleted}/>
                {this.props.children}
              </label>
              <span className="delete-task" onClick={this.props.onDelete}> × </span>
            </li>
        );
    }
}

export default Task;
