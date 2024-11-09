import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.scss';
const TaskAdd = ({ value, onChange, addTask }) => {
    return (_jsxs("div", { className: styles['task-add'], children: [_jsx("input", { type: 'text', value: value, onChange: (e) => onChange(e.target.value), placeholder: 'What needs to be done?', className: styles['task-add__input'] }), _jsx("button", { className: styles['task-add__button'], onClick: () => addTask(value), children: "Add" })] }));
};
export default TaskAdd;
