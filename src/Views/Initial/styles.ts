import styled from 'styled-components/native';
import {Colors} from '../../Config/Colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 280px;
  height: 280px;
  border-radius: 140px;
`;

export const TitleContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 65px;
  color: ${Colors.primary};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: ${Colors.subTitle};
  font-size: 20px;
`;
