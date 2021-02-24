import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TodoProvider } from './src/context/TodoContext';
import CreateScreen from './src/screens/Create/CreateScreen';
import EditScreen from './src/screens/Edit/EditScreen';
import IndexScreen from './src/screens/Index/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: "Joko's to-do list",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
};
