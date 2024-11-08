import React from 'react';
import { Task } from '../../types/types.ts';
import styles from './index.module.scss';
import clsx from 'clsx';

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => (
  <li className={styles['task-item']}>
    <div className={styles['custom-checkbox']} onClick={() => toggleTask(task.id)} role='checkbox' tabIndex={0}>
      <div className={clsx(styles['checkbox'], {
        [styles['checked']]: task.completed,
      })}>
        {task.completed && <div className={styles['checkmark']} />}
      </div>
    </div>
    <span className={task.completed ? styles['completed'] : ''}>{task.text}</span>
    <button className={styles['task-item__delete-button']} onClick={() => deleteTask(task.id)}>Delete</button>
  </li>
);
export default TaskItem;