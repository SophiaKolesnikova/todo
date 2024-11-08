import React, { useState } from 'react';
import { Task } from '../../types/types.ts';
import { addTask, deleteTask, filterTasks, toggleTask } from '../../utils/utils.ts';
import TaskList from '../../components/TaskList';
import FilterButtons from '../../components/FilterButtons';
import TaskAdd from '../../components/TaskAdd';
import styles from './index.module.scss';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [inputValue, setInputValue] = useState('');

  const handleToggleTask = (id: number) => {
    setTasks(prevTasks => toggleTask(prevTasks, id));
  };

  const handleAddTask = () => {
    if (inputValue.trim() === '') return;
    setTasks(prevTasks => addTask(prevTasks, inputValue));
    setInputValue('');
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prevTasks => deleteTask(prevTasks, id));
  };

  const filteredTasks = filterTasks(tasks, filter);

  const handleClearCompletedTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  };

  return (
    <div className={styles['todos']}>
      <h1 className={styles['todos__title']}>todos</h1>
      <TaskAdd value={inputValue} onChange={setInputValue} addTask={handleAddTask} />
      <TaskList tasks={filteredTasks} toggleTask={handleToggleTask} deleteTask={handleDeleteTask} />
      <div className={styles['todos__action-group']}>
        <FilterButtons setFilter={setFilter} currentFilter={filter}/>
        <button className={styles['todos__clear']} onClick={handleClearCompletedTasks}>Clear completed</button>
      </div>
    </div>
  );
};
export default App;