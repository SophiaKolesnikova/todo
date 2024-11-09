export const toggleTask = (tasks, id) => {
    return tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
};
export const addTask = (tasks, newTaskText) => {
    const newTask = {
        id: Date.now(),
        text: newTaskText,
        completed: false,
    };
    return [...tasks, newTask];
};
export const deleteTask = (tasks, id) => {
    return tasks.filter(task => task.id !== id);
};
export const filterTasks = (tasks, filter) => {
    return tasks.filter(task => {
        if (filter === 'completed')
            return task.completed;
        if (filter === 'active')
            return !task.completed;
        return true;
    });
};
