import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './index.tsx';

describe('TaskItem Component', () => {
  const mockToggleTask = jest.fn();
  const mockDeleteTask = jest.fn();

  const task = {
    id: 1,
    text: 'New Task',
    completed: false,
  };
  beforeEach(() => {
    render(<TaskItem task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
  });
  test('can toggle task complete', () => {
    const checkbox = screen.getByRole('checkbox');
    const taskElement = screen.getByText('new task');
    expect(taskElement).not.toHaveClass('completed');
    fireEvent.click(checkbox);
    expect(mockToggleTask).toHaveBeenCalledWith(task.id);
  });

  test('can delete task', () => {
    const deleteButton = screen.getByText('delete');
    fireEvent.click(deleteButton);
    expect(mockDeleteTask).toHaveBeenCalledWith(task.id);
  });

  test('displays completed task correctly', () => {
    const completedTask = { ...task, completed: true };
    render(<TaskItem task={completedTask} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
    const taskElement = screen.getByText(/new task/i, { selector: 'span.completed' });
    expect(taskElement).toHaveClass('completed');
  });
});