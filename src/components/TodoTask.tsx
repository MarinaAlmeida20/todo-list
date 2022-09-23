import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
}

const TodoTask = ({ task }: Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button>X</button>
            {/* Task: {task.taskName} || Deadline: {task.deadline} */}
        </div>
    )
}

export default TodoTask