import React, { useContext } from 'react';
import Form from '../../components/Form/Form';
import TodoContext from '../../context/TodoContext';

const EditScreen = ({ navigation }) => {
  const { todos, onEdit } = useContext(TodoContext);

  const id = navigation.getParam('id');
  const todo = todos.find((todo) => todo.id === id);

  return (
    <Form
      initialValues={{ title: todo.title, notes: todo.notes }}
      onSubmit={(title, notes) => {
        onEdit(id, title, notes, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;
