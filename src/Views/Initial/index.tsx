import React, {useCallback} from 'react';
import {View} from 'react-native';

import {
  Container,
  ContainerButton,
  TitleButton,
  Logo,
  TitleContainer,
  Title,
  SubTitle,
} from './styles';
import imgLogo from '../../Assets/logo.png';
import Button from '../../Components/Button/ActionButton';
import {useNavigation} from '@react-navigation/native';

const Initial: React.FC = () => {
  const {navigate} = useNavigation();
  const handleNavigateToFeed = useCallback(() => {
    navigate('Feed');
  }, []);

  return (
    <Container>
      <Logo source={imgLogo} />
      <TitleContainer>
        <Title>Busão</Title>
        <SubTitle>Horários na palma da sua mão</SubTitle>
      </TitleContainer>
      <ContainerButton onPress={() => handleNavigateToFeed()}>
        <TitleButton>Entrar</TitleButton>
      </ContainerButton>
    </Container>
  );
};

export default Initial;
