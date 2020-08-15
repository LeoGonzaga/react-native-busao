import styled from 'styled-components/native';
import {Colors} from '../../Config/Colors';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  padding: 20px;
  width: 90%;
  border-radius: 10px;
  align-items: center;
  margin-top: 60px;
`;
export const TitleButton = styled.Text`
  color: ${Colors.secondary};
  font-size: 25px;
`;
