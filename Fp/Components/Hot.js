import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function Hot({ttl,ttlbase}) {
  return (
    <>
     <View style={tw`flex-row justify-between mx-3 mt-5 items-center `} >
     <View>
      <Text style={tw`text-2xl font-semibold `}>{ttl}</Text>
      <Text style={tw`text-sm font-semibold text-gray-700 `}>{ttlbase}</Text>
     </View>
     <Text style={tw`text-amber-400 text-xl `}>See All</Text>
     </View>
    </>
  )
}