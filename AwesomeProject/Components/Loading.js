import { View, Text, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';
import React from 'react'
import tw from 'tailwind-react-native-classnames';


const{width,height} = Dimensions.get('window')
export default function Loading() {
  return (
    <>
    <View style={[tw`flex-row items-center justify-center flex-1`,{width,height}]}>
    <Progress.Circle size={100} indeterminate={true} color='blue' />
     </View>
    </>
  )
}