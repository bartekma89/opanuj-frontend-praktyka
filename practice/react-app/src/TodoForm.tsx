import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!value) {
      setError('Value cannot be empty');
      return;
    }
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add Todo</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};

export default TodoForm;
