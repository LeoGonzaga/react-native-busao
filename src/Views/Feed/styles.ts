import styled from 'styled-components/native';
import {Colors} from '../../Config/Colors';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${Colors.secondary};
`;

export const Card = styled.View`
  background-color: ${Colors.primary};
  width: 95%;
  padding: 10px;
`;
