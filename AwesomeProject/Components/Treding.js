import { View, Text, Touchable, Image, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { image185, image500 } from "../api/moviedb";
import { useState } from "react";
import { fetchTrendingMovies } from "../api/moviedb";
import {} from '../Constants/index'


export default function Treding({ data }) {
  const Navigation = useNavigation();
  const handleClick = (item) => {``
    Navigation.navigate("Movie", item);
  };

  return (
    <>
      <View style={tw``}>
        <SafeAreaView>
          <Text style={tw`mx-3 text-2xl text-gray-900 `}>Treding Movies</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <MovieCard item={item} handleClick={handleClick} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
    </>
  );
}
const MovieCard = ({ item, handleClick }) => {

  return (
    <>
      <TouchableWithoutFeedback onPress={() => handleClick(item)}>
        <View style={tw`w-[240px] h-[300px] mx-3 mt-5 `}>
          <Image
            source={require('../assets/avens.png')}
            style={tw`h-full w-full rounded-3xl `}
            resizeMode="cover"
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
