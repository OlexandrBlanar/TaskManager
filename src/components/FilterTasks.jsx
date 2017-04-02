import React from 'react';

import '../styles/FilterTasks.css';

class FilterTasks extends React.Component {

    render() {
        const filter = this.props.filter;
        console.log(filter);
        switch(filter) {
          case "all":
            var item1 = "active";
            break;
          case "new":
            var item2 = "active";
            break;
          case "completed":
            var item3 = "active";
            break;
        }
        return (
            <div className="filter">
                <span
                  className={"filterItem " + item1}
                  data-filter = "all"
                  onClick = {this.props.onTaskFilter.bind(this)}>
                  All
                </span>
                <span
                  className={"filterItem " + item2}
                  data-filter = "new"
                  onClick = {this.props.onTaskFilter.bind(this)}>
                  New
                </span>
                <span
                  className={"filterItem " + item3}
                  data-filter = "completed"
                  onClick = {this.props.onTaskFilter.bind(this)}>
                  Completed
                </span>
            </div>
        );
    }
}

export default FilterTasks;
