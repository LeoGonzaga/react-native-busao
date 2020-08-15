import React from 'react';
import {View} from 'react-native';

import {Container, Logo, TitleContainer, Title, SubTitle} from './styles';
import imgLogo from '../../Assets/logo.png';
import Button from '../../Components/Button/ActionButton';
const Initial: React.FC = () => {
  return (
    <Container>
      <Logo source={imgLogo} />

      <TitleContainer>
        <Title>Busão</Title>
        <SubTitle>Horários na palma da sua mão</SubTitle>
      </TitleContainer>
      <Button />
    </Container>
  );
};

export default Initial;
