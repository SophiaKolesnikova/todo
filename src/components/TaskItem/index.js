import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.scss';
import clsx from 'clsx';
const TaskItem = ({ task, toggleTask, deleteTask }) => (_jsxs("li", { className: styles['task-item'], children: [_jsx("div", { className: styles['custom-checkbox'], onClick: () => toggleTask(task.id), role: 'checkbox', tabIndex: 0, children: _jsx("div", { className: clsx(styles['checkbox'], {
                    [styles['checked']]: task.completed,
                }), children: task.completed && _jsx("div", { className: styles['checkmark'] }) }) }), _jsx("span", { className: task.completed ? styles['completed'] : '', children: task.text }), _jsx("button", { className: styles['task-item__delete-button'], onClick: () => deleteTask(task.id), children: "Delete" })] }));
export default TaskItem;
