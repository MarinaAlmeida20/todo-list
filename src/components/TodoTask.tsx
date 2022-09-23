import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
}

const TodoTask = ({ task }: Props) => {
    return (
        <div>Task: {task.taskName} || Deadline: {task.deadline}</div>
    )
}

export default TodoTask