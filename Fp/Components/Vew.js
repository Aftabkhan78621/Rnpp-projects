import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Sp2 from "../Screens/Sp2";

export default function Vew({ count, toggle }) {
  const totalq = Object.values(count).reduce((a, b) => a + b, 0);
  const pces = totalq * 6;

  const Nav = useNavigation();

  return (
    <>
      {toggle && totalq > 0 ? (
        <TouchableOpacity onPress={() => Nav.navigate("Sp2",{ totalq : totalq, pces: pces,toggle: toggle } )}>
          <View
            style={[
              tw`bg-orange-400 p-4 rounded-full mx-3`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5, // For Android shadow
              },
            ]}
          >
            <View style={tw`flex-row justify-between items-center `}>
              <Text style={tw`bg-gray-300 p-2 px-3 rounded-full`}>
                {totalq}
              </Text>
              <Text style={tw`font-semibold text-xl text-gray-200`}>
                View Cart
              </Text>
              <Text style={tw`font-semibold text-xl text-gray-200`}>
                ${pces}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}

    
    </>
  );
}
