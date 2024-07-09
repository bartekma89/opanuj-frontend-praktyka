import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
