import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Vew from "../Components/Vew";

export default function Sp1() {
  const nav = useNavigation();
  const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [count, setcount] = useState({});
  const [toggle, settoggle] = useState(false);
  const tq = Object.values(count).reduce((sum, item) => sum + item.qty, 0);
  const tp = Object.values(count).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  {
    /*
 
  const hadlei = (id)=>{
   setcount((prev=>({
    ...prev,
    [id] : (prev[id] || 0)+1
   })))
   if (!toggle) {
    settoggle(true)
   }
  }
  const hadled = (id)=>{
    setcount((prev)=>{
      const newcount = {...prev}
      if(newcount[id] > 0){
        newcount[id] -=1
      }
      const totalcount = Object.values(newcount).reduce((a,b)=>a+b , 0)
      if(totalcount == 0){
        settoggle(false)
      }
      return newcount
    })
   }
     */
  }

  const UNSPLASH_ACCESS_KEY = "gfSu9PGF07joIjlhSkWtSstFfIqPCNgqSGt0QiikC0k";
  useEffect(() => {
    const randompage = Math.floor(Math.random() * 50) + 1;
    fetch(
      `https://api.unsplash.com/search/photos?query=cooked food&per_page=20&page=${randompage}&client_id=${UNSPLASH_ACCESS_KEY}`
    )
      .then((response) => response.json())
      .then((response) => setdata(response.results))
      .catch((error) => console.error(error));
  }, []);

  // const handleIncrement = (id, name, price, image) => {
  //   setcount((prev) => ({
  //     ...prev,
  //     [id]: prev[id]
  //       ? { ...prev[id], qty: prev[id].qty + 1 }
  //       : { name, price, image, qty: 1 },
  //   }));
  // };

  const handleIncrement = (id, name, price, image) => {
    setcount((prev) => ({
      ...prev,
      [id]: prev[id]
        ? { ...prev[id], qty: prev[id].qty + 1 }
        : { user: { name }, price, image, qty: 1 },
    }));
  };
  
  const handleDecrement = (id) => {
    setcount((prev) => {
      const newCount = { ...prev };
      if (newCount[id]?.qty > 0) {
        newCount[id].qty -= 1;
      }
      if (newCount[id]?.qty === 0) {
        delete newCount[id];
      }
      return newCount;
    });
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Transparent StatusBar */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Background Image */}
      <Image
        source={require("../assets/pzza.jpg")}
        style={tw`h-60 w-full absolute`}
        resizeMode="cover"
      />

      {/* Back Button */}
      <TouchableOpacity
        style={tw`mt-7 ml-4 bg-gray-300 w-7 h-6 rounded-md justify-center items-center`}
        onPress={() => nav.navigate("Home")}
      >
        <AntDesign name="arrowleft" size={20} color="black" />
      </TouchableOpacity>

      {/* Main Section */}
      <View style={tw`flex-1 bg-gray-300 mt-40 rounded-t-3xl shadow-md`}>
        <ScrollView contentContainerStyle={tw`pb-20`}  >
          <View style={tw`mt-5 mx-4`}>
            <Text style={tw`text-2xl font-semibold`}>Papa John's</Text>

            {/* Rating & Location */}
            <View style={tw`flex-row mt-1 items-center`}>
              <Text>⭐ 4 (4.6k reviews) · </Text>
              <Text style={tw`font-semibold`}>Fast Food </Text>
              <EvilIcons name="location" size={20} color="black" />
              <Text style={tw`text-sm`}> Nearby · 123 Main Street</Text>
            </View>

            <Text style={tw`mt-2 text-gray-500`}>
              All kinds of fast food available
            </Text>

            {/* Menu Section */}
            <Text style={tw`mt-5 text-3xl font-semibold`}>Menu</Text>

            {/* Food Items List */}
            {data.map((item, index) => (
              <View
                key={item.id}
                style={tw`bg-gray-600 items-center my-1 p-4 rounded-lg flex-row mt-5 `}
              >
                <Image
                  source={{ uri: item?.urls?.small }}
                  //  source={require("../assets/pzza.jpg")}
                  style={tw`h-20 w-25 rounded-lg   `}
                  resizeMode="cover"
                />
                <View style={tw`flex-1 ml-5 `}>
                  <Text style={tw` text-2xl font-semibold `}>
                  {item.user?.name || "Unknown"}
                  </Text>
                  <Text style={tw` text-xl text-base `}>{item.alt_description || item.description || "Delicious Dish"   }</Text>
                  <View style={tw`flex-row mt-4 justify-between `}>
                    <Text style={tw`font-semibold  text-sm`}>$12</Text>
                    <View style={tw`flex-row gap-3 items-center `}>
                      <TouchableOpacity
                        onPress={() => handleDecrement(item.id)}
                        style={tw`bg-amber-500  rounded-full text-white p-1 `}
                      >
                        <AntDesign name="minus" size={24} color="white" />
                      </TouchableOpacity>
                      <Text>{count[item.id]?.qty || 0}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          handleIncrement(
                            item.id,
                            "Food Item",
                            12,
                            item.urls.small
                          )
                        }
                        style={tw`bg-amber-500  rounded-full text-white  p-1 `}
                      >
                        <AntDesign name="plus" size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      {Object.keys(count).length > 0 && (
        <TouchableOpacity
          style={tw`absolute flex-row justify-between p-3 bottom-10 left-0 right-0 bg-amber-500 rounded-full items-center mx-4`}
          onPress={() => nav.navigate("Sp2", { cartItems: count, tq:tq , tp:tp })}
        >
          <Text style={tw`text-white text-lg font-semibold  `}>{tq}</Text>
          <Text style={tw`text-white text-lg font-semibold`}>View Cart</Text>
          <Text style={tw`text-white text-lg font-semibold`}>${tp}</Text>
        
        </TouchableOpacity>
      )}

      {/*
      <View style={tw`absolute bottom-10 left-0 right-0 ` }>
      <Vew count={count} toggle = {toggle} />
      </View> */}
    </SafeAreaView>
  );
}
