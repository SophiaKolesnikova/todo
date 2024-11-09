import { Task } from '../types/types.ts';
export declare const toggleTask: (tasks: Task[], id: number) => Task[];
export declare const addTask: (tasks: Task[], newTaskText: string) => Task[];
export declare const deleteTask: (tasks: Task[], id: number) => Task[];
export declare const filterTasks: (tasks: Task[], filter: "all" | "active" | "completed") => Task[];
