import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Entypo from "@expo/vector-icons/Entypo";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
export default function Search() {
  const navigation = useNavigation();
  const [results, setResults] = useState([1, 2, 3, 4]);
  const [loading,setLoading]= useState(false)
  const movie = "Hello World !";

  return (
    <>
      <SafeAreaView style={tw` bg-neutral-400 flex-1`}>
        <StatusBar style="light" />
        <View
          style={tw`flex-row items-center justify-between mx-3 my-10 border border-gray-900 rounded-full px-3 `}
        >
          <TextInput
            placeholder="Search Movie"
            placeholderTextColor={"light-gray"}
            autoFocus={true}
            selectionColor="#6B7280"
            caretHidden={false}
            style={tw` pb-1 text-base font-semibold text-white tracking-wider p-3`}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="circle-with-cross" size={28} color="black" />
          </TouchableOpacity>
        </View>

        {/** Results */}
        {results.length > 1 ? (
          <ScrollView
            style={tw`-mt-8 `}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 15 }}  >
            <Text style={tw` font-semibold ml-1 text-2xl mb-2 mx-4`}>
              Results ({results.length})
            </Text>
            <View style={tw`flex-row flex-wrap justify-around mx-1 `}>
              {results.map(({ item, index }) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    style={tw`items-center mb-1 `}
                    onPress={() => navigation.navigate("Movie", item)}
                  >
                    <View style={tw`shadow-lg rounded-lg`}>
                      <Image
                        source={require("../assets/avens.png")}
                        style={{
                          width: width * 0.44,
                          height: height * 0.3,
                          borderRadius: 18,
                        }}
                      />
                    </View>
                    <Text>{movie}</Text>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          </ScrollView>
        ) : (
          <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`text-white text-lg font-semibold`}>
              No Results Found
              <Entypo name="emoji-sad" size={30} color="white" />
            </Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
