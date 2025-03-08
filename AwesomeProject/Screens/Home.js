import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Treding from "../Components/Treding";
import Movielist from "../Components/Movielist";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Components/Loading";
import tw from "tailwind-react-native-classnames";
import { fetchTrendingMovies } from "../api/moviedb";

export default function Home() {
  const navigation = useNavigation();
  const [treding, setTreding] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);
  const [Upload, setUpload] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getTredingMovies()
  },[])
  const getTredingMovies = async ()=>{
    const data = await fetchTrendingMovies()
    console.log('got trending movies: ', data);
    if(data && data.length>0){
      setTreding(data.results)
    }
    else{
      console.error('Failed to fetch trending movies')
    }
  }

  return (
    <>
      <View style={tw`flex-1 bg-white`}>
        <SafeAreaView>
          <StatusBar style="light white" />
          <View style={tw`flex-row justify-between items-center p-4`}>
            <Ionicons name="grid-sharp" size={40} color="black"></Ionicons>
            <Text style={tw`text-3xl`}>
              <Text style={tw`text-blue-500 text-semibold`}>M</Text>ovies
            </Text>
            {/**<FontAwesomeIcon icon={FaMagnifyingGlass}  size={40} color="black" /> */}
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <Ionicons name="search-sharp" size={40} color="blackk"></Ionicons>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {loading ? (
          <Loading />
        ) : (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {/**treding movies */}
               {treding.length>0 && <Treding data={treding} />  }
            {/** Upcoming movies */}
            <Movielist data={Upload} tittle="Upload" />
            {/**top Rated movies */}
            <Movielist data={topRated} tittle="TopRated" />
          </ScrollView>
        )}
      </View>
    </>
  );
}
