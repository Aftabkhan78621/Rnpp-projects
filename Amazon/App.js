import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import "./global.css";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Components/Home";

const Stack = createStackNavigator();
export default function App() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
      console.log("Data fetched");
    }, 3000);
  }, []);

  if (isloading) {
    return (
      <View className="flex-1 justify-center items-center ">
        <Image source={require("./assets/Amazon.png")} className="w-48 h-24" />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
