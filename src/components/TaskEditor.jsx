import React from 'react';

import '../styles/TaskEditor.css';

class TasksEditor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: ''};
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleTaskAdd() {
        const newTask = {
            text: this.state.text,
            stateTask: 'new',
            id: Date.now()
        };

        this.props.onTaskAdd(newTask);
        this.setState({ text: '' });
    }

    render() {
        return (
            <div className="task-editor">
                <textarea
                    placeholder="Enter your task here..."
                    rows={3}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <button className="add-button" onClick={this.handleTaskAdd.bind(this)}>Add</button>
            </div>
        );
    }
}

export default TasksEditor;
