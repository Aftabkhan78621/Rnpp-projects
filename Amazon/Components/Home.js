import { View, Text, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ss from "../Slider/Ss";


export default function Home() {
  const screenWidth = Dimensions.get("window").width;
 
   
  return (
    <>
      <SafeAreaView className=" flex-1 ">
        <StatusBar translucent className=" bg-[#A0E9FF]" />
        <View className=" flex-1 ">
          {/* Header */}
          <View className=" bg-[#A0E9FF]  ">
            <View className="mt-10 flex-row items-center justify-around m-1  mb-3">
              <View
                className="w-10/12 px-4 flex-row items-center rounded-full border bg-white shadow-lime-600 shadow-lg "
                style={{ elevation: 10 }}
              >
                <Ionicons name="search-outline" size={23} className=" " />
                <TextInput
                  placeholder="Search or ask a question"
                  className="flex-1 ml-1  "
                  placeholderTextColor="#6B7290"
                  style={{ fontSize: 15 }}
                />
                <Ionicons name="scan-outline" size={23} className=" mr-4 " />
                <Ionicons name="mic-outline" size={23} className=" " />
              </View>
              <MaterialIcons
                name="qr-code-scanner"
                size={26}
                color="black"
                className="font-semibold ml-"
              />
              <View></View>
            </View>
            {/* scrollvew 1 jsme header kkkk sth ho  */}
            <View className="mb-5 ">
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View className="flex-row items-center">
                  <View className="flex items-center bg-fuchsia-100 p-3 mx-3 w-28 rounded-2xl ">
                    <Icon
                      name="amazon"
                      size={30}
                      color="#FF9900"
                      className="rounded-full"
                    />
                    <Text className="text-gray-500 font-semibold">Pay</Text>
                  </View>
                  <View className="flex items-center bg-fuchsia-100 p-3 mx-3 w-28 rounded-2xl ">
                    <Icon name="play-circle" size={30} color="#1C8DFF" />
                    <Text className="text-gray-500 font-semibold">Pay</Text>
                  </View>
                  <View className="flex items-center bg-fuchsia-100 p-3 mx-3 w-28 rounded-2xl ">
                    <FontAwesome5 name="capsules" size={30} color="#4CAF50" />
                    <Text className="text-gray-500 font-semibold">Pay</Text>
                  </View>
                  <View className="flex items-center bg-fuchsia-100 p-3 mx-3 w-28 rounded-2xl ">
                    <FontAwesome5 name="capsules" size={30} color="#4CAF50" />
                    <Text className="text-gray-500 font-semibold">Pay</Text>
                  </View>
                  <View className="flex items-center bg-fuchsia-100 p-3 mx-3 w-28 rounded-2xl ">
                    <Icon
                      name="amazon"
                      size={30}
                      color="#FF9900"
                      className="rounded-full"
                    />
                    <Text className="text-gray-500 font-semibold">Pay</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Delevery sectn */}
          <View className="flex-row items-center gap-2 bg-sky-300 p-3">
            <Ionicons name="location-outline" size={20} className=" " />
            <Text className=" text-gray-600  ">
              Deliver to Aftab - Bikaner 342001
            </Text>
            <Ionicons
              name="chevron-down-outline"
              size={15}
              color="grey"
              className="mt-2"
            />
          </View>

            {/* ss */}
            <Ss/>

          {/* Footer Scton */}
          <View className="flex-row items-center justify-around bg-white-500 absolute bottom-0 w-full p-3 border-t border-gray-300">
            <View className="flex items-center">
              <Ionicons name="home-outline" size={25} className=" " />
              <Text className=" text-gray-600 text-balance  text-xl  ">
                Home
              </Text>
            </View>
            <View className="flex items-center">
              <Ionicons name="person-outline" size={25} className=" " />
              <Text className=" text-gray-600 text-balance  text-xl  ">
                You
              </Text>
            </View>
            <View className="flex items-center">
              <Ionicons name="cart-outline" size={25} className=" " />
              <Text className=" text-gray-600 text-balance  text-xl  ">
                Cart
              </Text>
            </View>
            <View className="flex items-center">
              <Ionicons name="menu-outline" size={25} className=" " />
              <Text className=" text-gray-600 text-balance  text-xl  ">
                Menu
              </Text>
            </View>
            <View className="flex items-center">
              <Ionicons name="barcode-outline" size={25} className=" " />
              <Text className=" text-gray-600 text-balance  text-xl  ">
                Home
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
