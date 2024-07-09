import React, { useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

interface Todo {
  text: string;
  completed: boolean;
}

type Action =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; index: number }
  | { type: 'SET_FILTER'; filter: string }
  | { type: 'REMOVE_TODO'; index: number };

interface State {
  todos: Todo[];
  filter: string;
}

const initialState: State = {
  todos: [],
  filter: 'all',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_todo, index) => action.index !== index),
      };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === 'completed') return todo.completed;
    if (state.filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoForm addTodo={(text) => dispatch({ type: 'ADD_TODO', text })} />
      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'all' })}>
          All
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', filter: 'completed' })}
        >
          Completed
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', filter: 'incomplete' })}
        >
          Incomplete
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        toggleTodo={(index) => dispatch({ type: 'TOGGLE_TODO', index })}
        removeTodo={(index) => dispatch({ type: 'REMOVE_TODO', index })}
      />
    </div>
  );
};

export default App;
