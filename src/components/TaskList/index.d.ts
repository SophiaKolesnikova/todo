import React from 'react';
import { Task } from '../../types/types.ts';
interface TaskListProps {
    tasks: Task[];
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}
declare const TaskList: React.FC<TaskListProps>;
export default TaskList;
