import styled from 'styled-components/native';
import {Colors} from '../../Config/Colors';

export const Container = styled.View`
  background-color: ${Colors.primary};
  width: 95%;
  padding: 30px;
  margin: 10px 0px;
  flex-direction: row;
  border-radius: 10px;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const Circle = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${Colors.option_1};
  border-radius: 50px;
`;

export const Company = styled.Text`
  font-size: 20px;
  color: ${Colors.secondary};
  font-weight: bold;
  margin: 10px 0;
`;

export const Info = styled.View`
  flex-direction: column;
  margin: 0px 15px;
  justify-content: center;
`;

export const Hour = styled.Text`
  font-size: 20px;
  color: ${Colors.secondary};
`;
export const Citys = styled.Text`
  font-size: 18px;
  color: ${Colors.secondary};
`;
export const Money = styled.Text`
  font-size: 45px;
  font-weight:bold
  color: ${Colors.secondary};
`;
