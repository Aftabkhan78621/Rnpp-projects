import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import tw from "twrnc";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useEffect } from "react";
import Hot from "./Hot";
import { useNavigation } from "@react-navigation/native";

export default function Slider() {
  const Nav = useNavigation()
  const [images, setImages] = useState([]);
  const [firstSlider, setFirstSlider] = useState([]);
  const [secondSlider, setSecondSlider] = useState([]);


  const UNSPLASH_ACCESS_KEY = "gfSu9PGF07joIjlhSkWtSstFfIqPCNgqSGt0QiikC0k";
  useEffect(() => {
    const changepage = Math.floor(Math.random() * 50) + 1;
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=cooked food&per_page=20&page=${changepage}&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();

        setImages(data.results);
        setFirstSlider(data.results.slice(0, 10));  // पहले 10 इमेज
        setSecondSlider(data.results.slice(10, 20)); // अगले 10 इमेज
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);


  return (
    <>
    <View style={tw`mb-10`}>
      <FlatList
        data={firstSlider}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>Nav.navigate('Sp1')}>
          <View style={tw`mx-2 h-70 bg-gray-200 rounded-2 mt-5 rounded-3xl `}>
            <Image
              source={{ uri: item.urls?.small }}
              //  source={require("../assets/icon.png")}
              style={tw`h-40 w-65 rounded-t-3xl`}
              resizeMode="cover"
            />
            <Text style={tw`mt-3 mx-2`}>{item.user.name || "Unknown"} </Text>
            <View style={tw`flex-row mt-3 mx-1 `}>
              <Text>⭐ </Text>
              <Text>4 </Text>
              <Text>(4.6k review) . </Text>
              <Text>Fast Food </Text>
            </View>
            <View style={tw`flex-row mt-3 mx-1 `}>
              <EvilIcons name="location" size={24} color="black" />
              <Text>Nearby . 123 main street </Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
        <Hot ttl = 'Hot and spicy' ttlbase =  'Local fast food corner '  />
        
          <FlatList
        data={secondSlider}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>Nav.navigate('Sp1')}>
          <View style={tw`mx-2 h-70 bg-gray-200 rounded-2 mt-5 rounded-3xl `}>
            <Image
              source={{ uri: item.urls?.small }}
              //  source={require("../assets/icon.png")}
              style={tw`h-40 w-65 rounded-t-3xl`}
              resizeMode="cover"
            />
            <Text style={tw`mt-3 mx-2`}>Big Bite </Text>
            <View style={tw`flex-row mt-3 mx-1 `}>
              <Text>⭐ </Text>
              <Text>4 </Text>
              <Text>(4.6k review) . </Text>
              <Text>Fast Food </Text>
            </View>
            <View style={tw`flex-row mt-3 mx-1 `}>
              <EvilIcons name="location" size={24} color="black" />
              <Text>Nearby . 123 main street </Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
      </View>
    </>
  );
}
