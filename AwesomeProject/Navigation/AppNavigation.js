import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import Screens
import Home from "../Screens/Home"
import MovieScreen from '../Screens/MovieScreen';
import Person from '../Screens/Person';
import Search from '../Screens/Search';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
        <Stack.Screen name="Movie" component={MovieScreen} options={{headerShown:false}}  />
        <Stack.Screen name="Person" component={Person} options={{headerShown:false}}  />
        <Stack.Screen name="Search" component={Search} options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
