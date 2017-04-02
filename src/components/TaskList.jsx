import React from 'react';
import Task from './Task.jsx'

import '../styles/TaskList.css';

class TaskList extends React.Component {

    render() {
        var onTaskDelete = this.props.onTaskDelete;
        var tasks = this.props.tasks;
        var onTaskCompleted = this.props.onTaskCompleted;
        return (
            <ul className="tasks-grid">
                {
                    tasks.map(function(task){
                        return (
                            <Task
                                key={task.id}
                                stateTask = {task.stateTask}
                                onCompleted = {onTaskCompleted.bind(null, task)}
                                onDelete={onTaskDelete.bind(null, task)}>
                                {task.text}
                            </Task>
                        );
                    })
                }
            </ul>
        );
    }
}

export default TaskList;
