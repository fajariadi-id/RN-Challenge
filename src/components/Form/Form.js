import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  Clock,
  FormContainer,
  FormDescription,
  FormTitle,
  Greeting,
  InputDescription,
  InputTitle,
  SaveButton,
  BackgroundImage,
} from './Form.element';

const Form = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [notes, setNotes] = useState(initialValues.notes);

  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();

  const greetings = (hour) => {
    if (hour <= 10) return 'Good morning';
    if (hour > 10 && hour <= 15) return 'Good afternoon';
    if (hour > 15 && hour <= 24) return 'Good evening';
  };

  return (
    <BackgroundImage source={{ uri: 'https://source.unsplash.com/daily' }}>
      <FormContainer>
        <Clock>
          {hour < 10 ? `0${hour}` : hour}:{min < 10 ? `0${min}` : min}
        </Clock>
        <Greeting>{greetings(hour)}, Joko</Greeting>
        <FormTitle>What is your main focus today?</FormTitle>
        <InputTitle
          value={title}
          onChangeText={(newTitle) => setTitle(newTitle)}
        />
        <FormDescription>Notes</FormDescription>
        <InputDescription
          value={notes}
          onChangeText={(newNotes) => setNotes(newNotes)}
        />

        <SaveButton onPress={() => onSubmit(title, notes)}>
          <Text style={{ color: '#f6f6f4' }}>Save</Text>
        </SaveButton>
      </FormContainer>
    </BackgroundImage>
  );
};

Form.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

export default Form;
