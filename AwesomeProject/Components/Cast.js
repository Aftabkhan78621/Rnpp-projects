import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { ScrollView } from 'react-native-gesture-handler'


export default function Cast({cast,navigation}) {
  const personName = 'Raj Mlhotra '
  const CharacterName = 'SRK '
  return (
   <>
   <View style={tw`gap-3`}>
        <Text style={tw`text-white text-lg mt-2 mx-3 tracking-wider`}>Top Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingBottom:15}}>
        {
           cast && cast.map(({person,index})=>{
              return(
                <>
                <TouchableOpacity  onPress={()=>navigation.navigate('Person',person)}   style={tw` items-center`} >
                <View style={tw`h-20 w-20 overflow-hidden rounded-full items-center border border-neutral-500  `}>
                  <Image  source={require('../assets/avens.png')}
                    style={tw`h-full w-full `} />
                </View>
                <Text style={tw`text-xs text-white mt-1 `}>{CharacterName.length>14?CharacterName.slice(0,14):CharacterName}</Text>
                <Text style={tw`text-lg text-neutral-500 mx-2`}>{personName.length>14?personName.slice(0,14):personName}</Text>
                </TouchableOpacity>
                
                </>
              )
           })

        }
      </ScrollView>
   </View>
   
   </>
  )
}