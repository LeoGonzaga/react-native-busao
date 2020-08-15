import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Initial from './src/Views/Initial/index';
import Feed from './src/Views/Feed/index';
import New from './src/Views/New/index';
import {Colors} from './src/Config/Colors';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen
            name="Initial"
            component={Initial}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
              title: 'Busão',
              headerTitleAlign: 'center',
              headerTintColor: Colors.primary,
              headerTitleStyle: {fontWeight: 'bold', fontSize: 35},
              headerStyle: {elevation: 0},
            }}
          />
          <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
