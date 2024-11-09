import React from 'react';
import { Task } from '../../types/types.ts';
interface TaskItemProps {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}
declare const TaskItem: React.FC<TaskItemProps>;
export default TaskItem;
