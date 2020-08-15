import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {
  Container,
  Circle,
  Company,
  ImageContainer,
  Info,
  Citys,
  Hour,
  Money,
} from './styles';
import Logo from '../../Assets/logo.png';
const Card: React.FC = ({company, index}) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <ImageContainer>
        <Circle>
          <Image source={Logo} style={{width: 100, height: 100}} />
        </Circle>
        <Company>{company}</Company>
      </ImageContainer>

      <Info>
        <Hour>PARTIDA: 8H</Hour>
        <Citys>PEDRALVA-ITAJUBÁ</Citys>
        <Money>R$ 12,30</Money>
      </Info>

      <TouchableOpacity onPress={() => setActive(!active)}>
        <Text>V</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Card;
