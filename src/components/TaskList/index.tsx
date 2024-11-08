import React from 'react';
import { Task } from '../../types/types.ts';
import TaskItem from '../TaskItem';
import styles from './index.module.scss';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => (
  <ul className={styles['task-list']}>
    {tasks.length > 0 ? (
      tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))
    ) : (
      <li className={styles['task-list__empty']}>No tasks yet.</li>
    )}
  </ul>
);
export default TaskList;