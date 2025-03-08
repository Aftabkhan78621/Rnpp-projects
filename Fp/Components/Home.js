import { SafeAreaView, StatusBar, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import tw from "twrnc";
import Hot from "./Hot";
import Slider from "../Components/Slider";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray", height: "100%", }}>
      <StatusBar barStyle="dark-content" backgroundColor="gray" />
      <ScrollView style={tw``}>

     

      {/* Header */}
      <View style={tw`flex-row  w-[100%] items-center   `}>
        <View
          style={tw`flex-row items-center mx-3 bg-gray-400 rounded-full w-[80%] h-[12]
             border-1 border-gray-700  `}
        >
          <EvilIcons
            name="search"
            size={34}
            color="black"
            style={tw`mt--1 ml-1`}
          />
          <TextInput placeholder="Resturants" style={tw`flex-1`} />
          <Text style={tw`text-2xl text-gray-500`}>|</Text>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={tw`mr-2 text-gray-700`}>New York, NYC</Text>
        </View>
        <View style={tw`w-[10%]`}>
          <View style={tw` bg-[#FF6600] p-2 rounded-full shadow-md`}>
            <Feather name="sliders" size={24} color="gray-200" />
          </View>
        </View>
      </View>
      {/* foods secton */}
      <View style={tw`flex-row mt-5  `}>
        <View style={tw`flex items-center `}>
          <View
            style={tw`bg-gray-400 rounded-full w-12 h-12 items-center mx-3`}
          >
            <Image
              source={require("../assets/burger.png")}
              style={tw`w-7 h-7  rounded-full mt-2  `}
              resizeMode="contain"
            />
          </View>

          <Text style={tw`mt-1 text-gray-300 `}>Fast Food</Text>
        </View>
        <View style={tw`flex items-center ml-2`}>
          <View
            style={tw`bg-gray-400 rounded-full w-12 h-12 items-center mx-3 `}
          >
            <Image
              source={require("../assets/drink.png")}
              style={tw`w-7 h-7  rounded-full mt-2  `}
              resizeMode="contain"
            />
          </View>

          <Text style={tw`mt-1 text-gray-300 `}>Drinks</Text>
        </View>
        <View style={tw`flex items-center ml-2`}>
          <View
            style={tw`bg-gray-400 rounded-full w-12 h-12 items-center mx-3 `}
          >
            <Image
              source={require("../assets/icecream.png")}
              style={tw`w-7 h-7  rounded-full mt-2  `}
              resizeMode="contain"
            />
          </View>

          <Text style={tw`mt-1 text-gray-300 `}>Sweets</Text>
        </View>
        <View style={tw`flex items-center ml-2`}>
          <View
            style={tw`bg-gray-400 rounded-full w-12 h-12 items-center mx-3`}
          >
            <Image
              source={require("../assets/see.png")}
              style={tw`w-7 h-7  rounded-full mt-2  `}
              resizeMode="contain"
            />
          </View>

          <Text style={tw`mt-1 text-gray-300 `}>Sea Food</Text>
        </View>
        <View style={tw`flex items-center ml-2`}>
          <View
            style={tw`bg-gray-400 rounded-full w-12 h-12 items-center mx-3 `}
          >
            <Image
              source={require("../assets/pizza.png")}
              style={tw`w-7 h-7  rounded-full mt-2  `}
              resizeMode="contain"
            />
          </View>

          <Text style={tw`mt-1 text-gray-300 `}>All</Text>
        </View>
      </View>

       {/* slider */}
       <View>
       <Hot ttl = 'Hot and spicy' ttlbase =  'Local fast food corner '  />
       <Slider/>
     
       </View>

      

       </ScrollView>

    </SafeAreaView>
  );
}
