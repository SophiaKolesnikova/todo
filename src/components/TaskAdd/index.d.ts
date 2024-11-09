import React from 'react';
interface TaskAddProps {
    value: string;
    onChange: (text: string) => void;
    addTask: (task: string) => void;
}
declare const TaskAdd: React.FC<TaskAddProps>;
export default TaskAdd;
