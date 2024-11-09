import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { addTask, deleteTask, filterTasks, toggleTask } from '../../utils/utils.ts';
import TaskList from '../../components/TaskList';
import FilterButtons from '../../components/FilterButtons';
import TaskAdd from '../../components/TaskAdd';
import styles from './index.module.scss';
const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [inputValue, setInputValue] = useState('');
    const handleToggleTask = (id) => {
        setTasks(prevTasks => toggleTask(prevTasks, id));
    };
    const handleAddTask = () => {
        if (inputValue.trim() === '')
            return;
        setTasks(prevTasks => addTask(prevTasks, inputValue));
        setInputValue('');
    };
    const handleDeleteTask = (id) => {
        setTasks(prevTasks => deleteTask(prevTasks, id));
    };
    const filteredTasks = filterTasks(tasks, filter);
    const handleClearCompletedTasks = () => {
        setTasks(prevTasks => prevTasks.filter(task => !task.completed));
    };
    return (_jsxs("div", { className: styles['todos'], children: [_jsx("h1", { className: styles['todos__title'], children: "todos" }), _jsx(TaskAdd, { value: inputValue, onChange: setInputValue, addTask: handleAddTask }), _jsx(TaskList, { tasks: filteredTasks, toggleTask: handleToggleTask, deleteTask: handleDeleteTask }), _jsxs("div", { className: styles['todos__action-group'], children: [_jsx(FilterButtons, { setFilter: setFilter, currentFilter: filter }), _jsx("button", { className: styles['todos__clear'], onClick: handleClearCompletedTasks, children: "Clear completed" })] })] }));
};
export default App;
