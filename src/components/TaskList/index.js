import { jsx as _jsx } from "react/jsx-runtime";
import TaskItem from '../TaskItem';
import styles from './index.module.scss';
const TaskList = ({ tasks, toggleTask, deleteTask }) => (_jsx("ul", { className: styles['task-list'], children: tasks.length > 0 ? (tasks.map((task) => (_jsx(TaskItem, { task: task, toggleTask: toggleTask, deleteTask: deleteTask }, task.id)))) : (_jsx("li", { className: styles['task-list__empty'], children: "No tasks yet." })) }));
export default TaskList;
