import React from 'react'
import TaskItem from './TaskItem'

const tasks = [
    { id: 1, description: 'Foo', done: false },
    { id: 2, description: 'Bar', done: false },
    { id: 3, description: 'Baz', done: false },
];

class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks,
        };
    }

    onTaskClick(id) {
        const task = this.state.tasks.find(task => task.id === id);
        console.log(`${task.description} was clicked!`);
        const i = this.state.tasks.indexOf(task);
        const newTasks = this.state.tasks;
        task.done = !task.done;
        newTasks.splice(i, 1, task);
        this.setState({
            tasks: newTasks,
        });
    }


    renderTaskItems(tasks) {
        let renderedTasks = [];
        tasks.forEach(task => {
            renderedTasks.push(this.renderTaskItem(task));
        });
        return renderedTasks;
    }

    renderTaskItem(task) {
        return <TaskItem 
            key={ task.id }
            onClick={ () => this.onTaskClick(task.id) }
            task={ task }>
        </TaskItem>;
    }

    render() {
        return (
            <div className="TasksList">
                <div className="List-Header">
                    Tasks
                </div>
                <div className="List-Body">
                    <ul>
                        { this.renderTaskItems(this.state.tasks) }
                    </ul>
                </div>
            </div>
        );
    }
}

export default TasksList;