import React, { useContext, useState } from 'react';
import { TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import TodoContext from '../../context/TodoContext';
import { FontAwesome } from '@expo/vector-icons';
import {
  AddButton,
  ButtonText,
  Container,
  Todo,
  TodoContainer,
  TodoTitle,
  TodoNotes,
  TodoHeader,
  Instruction,
  Filters,
  FilterAll,
  FilterComplete,
  FilterUncomplete,
  FilterText,
} from './IndexScreen.element';

const IndexScreen = ({ navigation }) => {
  const [filter, setFilter] = useState('all');

  const { todos, onDelete, onToggleComplete } = useContext(TodoContext);

  return (
    <ImageBackground
      blurRadius={3}
      style={{ flex: 1, resizeMode: 'cover' }}
      source={{ uri: 'https://source.unsplash.com/daily' }}
    >
      <Container>
        <AddButton onPress={() => navigation.navigate('Create')}>
          <ButtonText>Add Todo</ButtonText>
          <FontAwesome name='plus-square-o' size={24} color='#f6f6f4' />
        </AddButton>

        <Filters>
          <FilterAll filter={filter} onPress={() => setFilter('all')}>
            <FilterText>All</FilterText>
          </FilterAll>

          <FilterComplete filter={filter} onPress={() => setFilter('complete')}>
            <FilterText>Completed</FilterText>
          </FilterComplete>

          <FilterUncomplete
            filter={filter}
            onPress={() => setFilter('uncomplete')}
          >
            <FilterText>Uncompleted</FilterText>
          </FilterUncomplete>
        </Filters>

        <Instruction>Long press todo to toggle complete.</Instruction>
      </Container>

      <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
        <TodoContainer
          data={todos}
          showsVerticalScrollIndicator={false}
          keyExtractor={(todo) => todo.id.toString()}
          renderItem={({ item }) => {
            return (
              <Todo
                filter={filter}
                complete={item.complete ? 'complete' : 'uncomplete'}
                id={item.id}
                onLongPress={() => onToggleComplete(item.id)}
              >
                <TodoHeader complete={item.complete}>
                  <TodoTitle complete={item.complete}>{item.title}</TodoTitle>

                  <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <FontAwesome name='trash' size={24} color='#333' />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Edit', {
                        id: item.id,
                      })
                    }
                  >
                    <FontAwesome
                      style={
                        item.complete
                          ? { display: 'none' }
                          : { display: 'flex', marginLeft: 10 }
                      }
                      name='edit'
                      size={24}
                      color='#333'
                    />
                  </TouchableOpacity>
                </TodoHeader>
                <TodoNotes complete={item.complete}>{item.notes}</TodoNotes>
              </Todo>
            );
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default IndexScreen;
