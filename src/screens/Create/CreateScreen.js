import React, { useContext } from 'react';
import Form from '../../components/Form/Form';
import TodoContext from '../../context/TodoContext';

const CreateScreen = ({ navigation }) => {
  const { onAdd } = useContext(TodoContext);

  return (
    <Form
      onSubmit={(title, notes) => {
        onAdd(title, notes, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default CreateScreen;
