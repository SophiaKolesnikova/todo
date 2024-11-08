import React from 'react';
import styles from './index.module.scss';

interface TaskAddProps {
  value: string;
  onChange: (text: string) => void;
  addTask: (task: string) => void;
}

const TaskAdd: React.FC<TaskAddProps> = ({ value, onChange, addTask }) => {
  return (
    <div className={styles['task-add']}>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='What needs to be done?'
        className={styles['task-add__input']}
      />
      <button className={styles['task-add__button']} onClick={() => addTask(value)}>Add</button>
    </div>
  )
    ;
};
export default TaskAdd;