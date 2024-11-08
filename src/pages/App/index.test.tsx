import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './index.tsx';

describe('App component', () => {
  test('renders the title', () => {
    render(<App />);
    const titleElement = screen.getByText('todos');
    expect(titleElement).toBeInTheDocument();
  });
});