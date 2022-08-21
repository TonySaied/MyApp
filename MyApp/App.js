import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Imports
import TicTacToe from './TicTacToe';
import Todo from './Todo';
import DisplayNum from './DisplayNum';
import MainTask1 from './MainTask1';

///
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
////
function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  /*function TicTacToeFunction() {
    return <TicTacToe />;
  }
  function TodoFunction() {
    return <Todo />;
  }*/
  function HomeTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="TicTacToe" component={TicTacToe}></Tab.Screen>
        <Tab.Screen name="To Do" component={Todo}></Tab.Screen>
        <Tab.Screen name="Counter" component={DisplayNum}></Tab.Screen>
        <Tab.Screen name="Generator" component={MainTask1}></Tab.Screen>
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My Apps" component={HomeTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
