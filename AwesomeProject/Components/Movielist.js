import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
export default function Movielist({ tittle, data, hideSeeAll,colored }) {
  const moviename =
    "movienamefdfllfflfflfflfflflflfflflflfflflflfflflflfflflflffffflflflffffflflflf";
  const navigation = useNavigation();
  const[movie,setMovie] = useState(false)
  return (
    <>
      <View style={tw`flex-1 h-full`}>
        <View style={tw`flex-row justify-between items-center mx-3 mt-4`}>
          <Text style={tw`text-2xl text-gray-700 ${colored?"text-amber-500":""} `}>{tittle} </Text>
          {!hideSeeAll && (
            <TouchableOpacity>
              <Text style={tw`text-blue-700 text-xl `}>See All</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw``}
          showsVerticalScrollIndicator={true}
        >
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push('Movie',item)}
              style={tw`mx-2 `}
            >
              <View style={tw` mt-2 items-center  `}>
                <View style={tw`space-y-1 mx-3 mt-2 w-[120px] h-[200px] mb-2 `}>
                  <Image
                    source={require("../assets/super.jpg")}
                    style={tw`h-full w-full rounded-3xl `}
                    resizeMode="cover"
                  />
                </View>
                 
                <Text style={tw`text-l ${colored ? "text-white":""}`}>
                  {moviename.length > 14 ? moviename.slice(0, 14) : moviename}
                </Text> 
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
