import React, { useReducer } from 'react';

const TodoContext = React.createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add_todo':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999),
          title: action.payload.title,
          notes: action.payload.notes,
          complete: false,
        },
      ];

    case 'delete_todo':
      return state.filter((todo) => todo.id !== action.payload);

    case 'edit_todo':
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

    case 'complete_todo':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );

    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const todos = [
    {
      id: '1',
      title: 'Complete the requirement',
      notes:
        '1. Add a new to-do item 2. Mark a to-do item as done 3. Delete a to-do item 4. Edit a to-do item 5. Display all to-dos in a list or a grid 6. Filter between completed and incomplete items',
      complete: true,
    },
    {
      id: '2',
      title: 'Save data to a backend',
      notes: 'Save data to a backend server (like firebase)',
      complete: false,
    },
  ];

  const [state, dispatch] = useReducer(todoReducer, todos);

  const addTodo = (title, notes, callback) => {
    dispatch({ type: 'add_todo', payload: { title, notes } });
    callback();
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'delete_todo', payload: id });
  };

  const editTodo = (id, title, notes, callback) => {
    dispatch({ type: 'edit_todo', payload: { id, title, notes } });
    callback();
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'complete_todo', payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state,
        onAdd: addTodo,
        onDelete: deleteTodo,
        onEdit: editTodo,
        onToggleComplete: toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
