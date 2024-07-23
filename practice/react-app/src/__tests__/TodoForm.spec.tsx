// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { expect, describe, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../App';

afterEach(cleanup);

describe('test todo form', () => {
  test('should render the header form', () => {
    render(<Form />);

    const header = screen.getByText(/Todo List/i);
    expect(header).toBeInTheDocument();
  });

  test('should render error if is no input value', async () => {
    render(<Form />);

    const todoButton = screen.getByText(/Add todo/i);
    await userEvent.click(todoButton);

    const errorMessage = screen.getByText('Value cannot be empty');

    expect(errorMessage).toBeInTheDocument();
  });

  test('should add a new todo item', async () => {
    render(<Form />);

    const inputElement = screen.getByPlaceholderText(/Add new todo/i);
    const todoButton = screen.getByText(/add todo/i);

    await userEvent.type(inputElement, 'do something');
    await userEvent.click(todoButton);

    const todoItem = screen.getByText(/do something/i);
    expect(todoItem).toBeInTheDocument();
  });

  test('should toggle the todo TodoItem', async () => {
    render(<Form />);

    const inputElement = screen.getByPlaceholderText(/Add new todo/i);
    const todoButton = screen.getByText(/add todo/i);

    await userEvent.type(inputElement, 'do something');
    await userEvent.click(todoButton);

    const todoItem = screen.getByText(/do something/i);
    expect(todoItem).toHaveStyle('text-decoration: none');

    await userEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('should toggle the todo TodoItem', async () => {
    render(<Form />);

    const inputElement = screen.getByPlaceholderText(/Add new todo/i);
    const todoButton = screen.getByText(/add todo/i);

    await userEvent.type(inputElement, 'do something');
    await userEvent.click(todoButton);

    const todoItem = screen.getByText(/do something/i);
    expect(todoItem).toBeInTheDocument();

    const deleteButton = screen.getByText('x');
    await userEvent.click(deleteButton);
    expect(screen.queryAllByRole('listitem').length).toBe(0);
  });
});
