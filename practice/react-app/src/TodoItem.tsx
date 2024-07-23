import React from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  index: number;
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div>
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          display: 'inline-block',
        }}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </li>
      <button
        style={{ display: 'inline-block' }}
        onClick={() => removeTodo(index)}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
