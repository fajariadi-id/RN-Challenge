import styled from 'styled-components';

export const Container = styled.View`
  padding: 0 20px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #149d4fcc;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 20px 0 5px;
`;

export const ButtonText = styled.Text`
  color: #f6f6f4;
  margin-right: 10px;
`;

export const Filters = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #aaaaaacc;
  padding: 10px 10px;
  border-radius: 5px;
`;

export const FilterAll = styled.TouchableOpacity`
  background-color: ${({ filter }) =>
    filter === 'all' ? '#333' : 'transparent'};
  padding: 5px 10px;
  border-radius: 5px;
`;

export const FilterComplete = styled(FilterAll)`
  background-color: ${({ filter }) =>
    filter === 'complete' ? '#333' : 'transparent'};
`;

export const FilterUncomplete = styled(FilterAll)`
  background-color: ${({ filter }) =>
    filter === 'uncomplete' ? '#333' : 'transparent'};
`;

export const FilterText = styled.Text`
  color: #f6f6f4;
`;

export const Instruction = styled.Text`
  text-align: center;
  margin: 10px 0 15px;
  color: #f6f6f4;
`;

export const TodoContainer = styled.FlatList``;

export const Todo = styled.TouchableOpacity`
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  display: ${({ filter, complete }) =>
    filter === complete || filter === 'all' ? 'flex' : 'none'};
`;

export const TodoHeader = styled.View`
  background-color: #ffc25ccc;
  padding: 15px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ complete }) => (complete ? 0.5 : 1)};
`;

export const TodoTitle = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: 700;
  flex: 1;
  opacity: ${({ complete }) => (complete ? 0.5 : 1)};
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
`;

export const TodoNotes = styled.Text`
  background-color: #ffd79ccc;
  color: #333;
  border-top-width: 1px;
  border-top-color: #eaeaea;
  padding: 10px 10px 30px;
  opacity: ${({ complete }) => (complete ? 0.5 : 1)};
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
`;
