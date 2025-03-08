import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../Components/Cast";
import Movielist from "../Components/Movielist";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const topmargin = ios ? "" : "mt-3";

export default function MovieScreen() {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  const { params: item } = useRoute();
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const movieName =
    "jhumejopathangkffkffkffkfkfkffkfkfkffkfkfkffffkffkffkffkfkfkffkfkfkffkfkfkffkfkfkffkfkfkffkfkfkf ..";
  useEffect(() => {
    // call th movie details api
  }, [item]);
  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        style={tw`flex-1 bg-neutral-900`} >
        {/**back button and movie poster */}
        <View style={tw`w-full`}>
          <SafeAreaView
           style={tw`${
              ios
                ? ""
                : " absolute z-20 w-full flex-row justify-between items-center px-4 py-2 mt-3 "
            } `}
          >
            <StatusBar style="light" />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-outline"
                size={40}
                color="white"
                style={tw`bg-amber-500 rounded-lg`}
              />
            </TouchableOpacity>
            <StatusBar style="light" />
            <TouchableOpacity
              style={tw``}
              onPress={() => toggleFavorite(!isFavorite)}
            >
              <Ionicons
                name="heart-sharp"
                size={40}
                color={isFavorite ? "blue" : "white"}
              ></Ionicons> 
            </TouchableOpacity>
          </SafeAreaView>
          <View style={tw` `}>
            <Image
              source={require("../assets/avens.png")}
              style={tw`w-[400px] h-[500px] items-center `}
              resizeMode="cover"
            />
            <LinearGradient
              colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
              style={tw`w-[500px] h-[300px] absolute bottom-0  `}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>
        </View>

        {/**Movie Details */}
        <View style={tw`gap-1`}>
          {/* Tittle */}
          <Text
            style={tw`text-white text-center text-3xl font-bold tracking-wider`}
          >
            {movieName.length > 20
              ? movieName.slice(0, 10) + " ..."
              : movieName}
          </Text>
          {/* status, release, runtime */}
          <Text
            style={tw`text-neutral-400 font-semibold text-base  text-center`}
          >
            Released - 2020 - 170 min{" "}
          </Text>
          {/* Genres */}
          <View style={tw`flex-row items-center justify-center`}>
            <Text
              style={tw`text-neutral-400 font-semibold text-base text-center`}
            >
              Action -{" "}
            </Text>
            <Text
              style={tw`text-neutral-400 font-semibold text-base text-center`}
            >
              Thrill -{" "}
            </Text>
            <Text
              style={tw`text-neutral-400 font-semibold text-base text-center`}
            >
              Comedy{" "}
            </Text>
          </View>
          {/**Description */}
          <Text style={tw`text-neutral-400 mx-4 tracking-wider `}>
            SafeAreaView: Ensures content is properly displayed without being
            cut off by the device’s screen edges, especially on iOS devices.
          </Text>
        </View>
        {/** cast */}
        <Cast cast={cast} navigation={navigation} />
        {/** similar Movies */}
        <Movielist tittle="Similar Movies" hideSeeAll={true}  colored={true} data={similarMovies} />
      
    </ScrollView>
   
   </>
  );
}
