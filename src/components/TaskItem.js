import React from 'react'

function TaskItem(props) {
    return (
        <li>
            <button onClick={ props.onClick }>
                { props.task.done ? 'X' : 'O' }
            </button>
            { props.task.description }
        </li>
    );
}

export default TaskItem;