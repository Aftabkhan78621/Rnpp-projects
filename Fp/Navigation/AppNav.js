import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from '../Components/Home';
import Sp1 from '../Screens/Sp1';
import Sp2 from '../Screens/Sp2';
import { CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Sp1" component={Sp1} options={{ headerShown: false }} />

          {/* ✅ Yaha options ke andar likho */}
          <Stack.Screen 
            name="Sp2" 
            component={Sp2} 
            options={{ 
              headerShown:false, 
              presentation: "transparentModal",
              gestureEnabled: true,
              gestureDirection: "vertical",
              cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS,
          //   ({current})=>({
            //    cardStyle :{
              //    opacity: current.progress.interpolate({
                //    inputRange :[0,1],
                //    outputRange:[0,1]
               //   })
               // },
               // overlayStyle:{
                 // backgroundColor: "rgba(0,0,0,0.5)",                }
             // })
          //*/}
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
