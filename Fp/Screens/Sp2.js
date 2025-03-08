import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function Sp2({ route }) {
  const { cartItems, tp, tq  } = route.params;
  const [cart, setCart] = useState(cartItems);
  const Nav = useNavigation();

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[id].qty > 1) {
        updatedCart[id] = { ...updatedCart[id], qty: updatedCart[id].qty - 1 }; 
      } else {
        delete updatedCart[id];
      }

      return updatedCart;
    });
  };


  return (
    <>
      <SafeAreaView style={tw`bg-gray-300 flex-1`}>
        <StatusBar translucent barstyle="dark-content" backgroundColor="#D1D5DB" />

        {/* Header */}
        <View style={tw`mt-7 flex-row gap-20 items-center`}>
          <TouchableOpacity onPress={() => Nav.goBack()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={tw`ml-3 bg-orange-400 rounded-full p-2`}
            />
          </TouchableOpacity>
          <View style={tw`items-center justify-center flex ml-5`}>
            <Text style={tw`text-2xl font-bold`}>Your Cart</Text>
            <Text style={[tw`text-xl text-gray-600 text-base mt--1`, { fontSize: 14 }]}>
              Papa johns
            </Text>
          </View>
        </View>

        {/* Delivery Section */}
        <View style={tw`flex-row justify-between items-center bg-red-200 p-4 mt-3`}>
          <Image
            source={require("../assets/delevery.webp")}
            style={tw`h-12 w-10 ml-3 bg-transparent rounded-full`}
            resizeMode="cover"
          />
          <Text style={tw`font-semibold`}>Deliver in 20-30 minutes</Text>
          <Text style={[tw`text-orange-600 font-semibold`, { fontSize: 15 }]}>
            Change
          </Text>
        </View>

        {/* Cart Items */}
        <ScrollView>
          {Object.entries(cart).map(([id, item]) => (
            <View key={id} style={tw`mt-5 bg-white rounded-2xl mx-3 p-4 flex-row items-center gap-4`}>
              <Text style={tw`text-amber-500 font-semibold`}>{item.qty} ×</Text>
              <Image source={{ uri: item.image }} style={tw`rounded-full w-13 h-10 ml-3`} resizeMode="cover" />
              <Text style={tw`flex-1 ml-3`}> {item.user?.name || "Unknown"}</Text>
              <Text style={tw`font-semibold`}>${tp}</Text>
              <TouchableOpacity onPress={() => decreaseQuantity(id)}>
                <AntDesign 
                  name="minus"
                  size={24}
                  color="black"
                  style={tw`bg-amber-500 rounded-full p-1`}
                /> 
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Footer Section */}
        <View style={tw`absolute bottom-0 bg-red-200 h-50 w-full rounded-t-3xl flex`}>
          <View style={tw`mt-4 mx-7 gap-3`}>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-600 font-semibold`}>Subtotal</Text>
              <Text style={tw`text-gray-600`}>${tp}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-600`}>Delivery</Text>
              <Text style={tw`text-gray-600`}>$2</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-black text-sm font-bold`}>Order Total</Text>
              <Text style={tw`text-gray-600 font-bold`}>${tp + 2} </Text>
            </View>
          </View>
          <View style={tw`bg-amber-500 items-center mt-4 w-90 mx-2 p-4 rounded-full`}>
            <Text style={[tw`text-white font-semibold tracking-widest`, { fontSize: 20 }]}>
              Place Order
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
