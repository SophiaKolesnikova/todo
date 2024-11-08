import { Task } from '../types/types.ts';

export const toggleTask = (tasks: Task[], id: number): Task[] => {
  return tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );
};
export const addTask = (tasks: Task[], newTaskText: string): Task[] => {
  const newTask: Task = {
    id: Date.now(),
    text: newTaskText,
    completed: false,
  };
  return [...tasks, newTask];
};
export const deleteTask = (tasks: Task[], id: number): Task[] => {
  return tasks.filter(task => task.id !== id);
};
export const filterTasks = (tasks: Task[], filter: 'all' | 'active' | 'completed'): Task[] => {
  return tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });
};