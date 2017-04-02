import React from 'react';
import TasksEditor from './TaskEditor.jsx';
import TaskList from './TaskList.jsx';
import FilterTasks from './FilterTasks.jsx';

import '../styles/App.css';


class TasksApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          tasks: [],
          filterTasks: [],
          isFilter: false,
          filter: "all"
      };
    }

    componentDidMount() {
        const localTasks = JSON.parse(localStorage.getItem('tasks'));
        if (localTasks) {
            this.setState({ tasks: localTasks });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleTaskCompleted(task) {
        const taskId = task.id;
        const newTasks = this.state.tasks.map(function(el) {
          if (el.id == taskId) {
            if (el.stateTask == "new") {
              el.stateTask = "completed";
            } else {
              el.stateTask = "new";
            }

          }
          return el;
        });
        this.setState({ tasks: newTasks }, function(){if (this.state.isFilter) {
            this.handleTaskFilter(this.state.filter);
        }});
    }

    handleTaskDelete(task) {
        const taskId = task.id;
        const newTasks = this.state.tasks.filter(function(task) {
            return task.id !== taskId;
        });
        this.setState({ tasks: newTasks }, function(){if (this.state.isFilter) {
            this.handleTaskFilter(this.state.filter);
        }});
    }

    handleTaskFilter(event) {
      let filter = "";
      let dispayedTasks;
      if (event.target == undefined) {
          filter = this.state.filter;
      } else {
          filter = event.target.dataset.filter;
      }
      if (filter == 'new' || filter == 'completed') {
          dispayedTasks = this.state.tasks.filter((el) => {
            return filter == el.stateTask;
          });
          this.setState({isFilter: true});
      } else if (filter == 'all') {
        this.setState({isFilter: false});
      }
      this.setState({filterTasks: dispayedTasks, filter: filter});
    }

    handleTaskAdd(newTask) {
        const newTasks = this.state.tasks.slice();
        newTasks.unshift(newTask);
        this.setState({ tasks: newTasks }, () => {
          if (this.state.isFilter) {
            this.handleTaskFilter(this.state.filter);
        }});
    }

    render() {
        return (
            <div className="tasks-app">
                <h2 className="app-header">Task manager</h2>
                <TasksEditor onTaskAdd={this.handleTaskAdd.bind(this)} />
                <TaskList
                  tasks={this.state.isFilter ? this.state.filterTasks : this.state.tasks}
                  onTaskCompleted = {this.handleTaskCompleted.bind(this)}
                  onTaskDelete={this.handleTaskDelete.bind(this)}
                />
                <FilterTasks
                  tasks={this.state.tasks}
                  onTaskFilter = {this.handleTaskFilter.bind(this)}
                  filter = {this.state.filter}/>
            </div>
        );
    }

    _updateLocalStorage() {
        const tasks = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', tasks);
    }
}

export default TasksApp;
