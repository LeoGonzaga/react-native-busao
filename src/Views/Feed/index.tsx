import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import {Container} from './styles';
import Card from '../../Components/Card/index';
const Feed: React.FC = () => {
  const array = [
    'Faria',
    'Gardenia',
    'Teste',
    'Passaro Marrom',
    'Faria II',
    'Gardenia de Te',
    'Testendo',
    'Passaro Azul',
  ];
  return (
    <Container>
      <FlatList
        data={array}
        renderItem={({item, index}) => <Card company={item} index />}
        keyExtractor={(item) => item}
      />
    </Container>
  );
};

export default Feed;
