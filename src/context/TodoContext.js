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
      id: 'p1',
      title: 'Pakai masker',
      notes: 'Ingat pesan ibu',
      complete: true,
    },
    {
      id: 'p2',
      title: 'Cuci tangan',
      notes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus veritatis rerum, officia aliquam corporis ad qui at? Animi, dolorum.',
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
