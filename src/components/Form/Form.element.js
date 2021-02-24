import styled from 'styled-components';

export const BackgroundImage = styled.ImageBackground`
  resize-mode: cover;
  justify-content: center;
`;

export const FormContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #3333334d;
`;

export const Clock = styled.Text`
  font-size: 70px;
  color: #f6f6f4;
`;

export const Greeting = styled.Text`
  font-size: 24px;
  margin-bottom: 30px;
  color: #f6f6f4;
`;

export const FormTitle = styled.Text`
  font-size: 18px;
  color: #f6f6f4;
`;

export const InputTitle = styled.TextInput`
  border-width: 2px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  border-bottom-color: #f6f6f4;
  color: #f6f6f4;
`;

export const FormDescription = styled(FormTitle)``;
export const InputDescription = styled(InputTitle)``;

export const SaveButton = styled.TouchableOpacity`
  border-width: 1px;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 30px;
  border-color: #f6f6f4;
`;
