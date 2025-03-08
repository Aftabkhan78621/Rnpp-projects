import { View, Text, Platform,Image, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView,SafeAreaView,StatusBar, TouchableOpacity} from 'react-native'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Movielist from "../Components/Movielist"
import Loading from '../Components/Loading'

const {width,height} = Dimensions.get('window')
const ios = Platform.OS === 'ios'
export default function Person() { 
  const navigation = useNavigation()
  const [isFavorite, toggleFavorite] = useState(false);
  const[personMovies,setPersonMovies] = useState([1,2,3]);
  const[loading,setLoading] = useState(false);
return (
    <>
    <ScrollView style={tw`flex-1 bg-neutral-900 `} contentContainerStyle={{paddingBottom:20} }>
    <SafeAreaView
           style={tw`${
              ios
                ? ""
                : " absolute z-20 w-full flex-row justify-between items-center px-4 py-2 mt-6 "
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
        
        {/** person details */}
        { loading ? (<Loading/>) : (
             <View>  
             <View style={[tw`flex-row justify-center shadow-lg `, { shadowColor:'gray', shadowRadius:40, shadowOffset:{width:0,height:5}, shadowOpacity:1 }   ]}   >
                 <View style={tw` mt-25 items-center rounded-full overflow-hidden h-72 w-72 border-2 border-gray-500  `}>
                 <Image source={require('../assets/avens.png')} 
                   style= {{height:height*0.43, width:width*0.74}} 
                   resizeMode='cover' />
                 </View>
               </View>
     
                 {/**For Name */}
                 <View style={tw`mt-3`}>
                   <Text style={tw`text-3xl text-white font-bold text-center`}>keanu Reeves</Text>
                   <Text style={tw`text-white text-base text-neutral-500 text-center`}>London, United Kingdom</Text>
                 </View>
                 {/** for gendering and some */}
                 <View style={tw` mt-3 mx-3  p-4 flex-row justify-between items-center bg-neutral-700 rounded-full  `}>
                 
                 <View style={tw`border-r-2 border-r-neutral-400  px-2 items-center`}>
                 <Text style={tw`text-white font-semibold`}>Gender</Text>
                 <Text style={tw`text-neutral-300 text-sm`}>Male</Text>
                 </View>
                 <View style={tw`border-r-2 border-r-neutral-400  px-2 items-center`}>
                 <Text style={tw`text-white font-semibold`}>Birthday</Text>
                 <Text style={tw`text-neutral-300 text-sm`}>1960-09-02</Text>
                 </View>
                 <View style={tw`border-r-2 border-r-neutral-400  px-2 items-center`}>
                 <Text style={tw`text-white font-semibold`}>Known For</Text>
                 <Text style={tw`text-neutral-300 text-sm`}>Acting</Text>
                 </View>
                 <View style={tw`  px-2 items-center`}>
                 <Text style={tw`text-white font-semibold`}>Popularity</Text>
                 <Text style={tw`text-neutral-300 text-sm`}>64.23</Text>
                 </View>
     
                 </View>
                 
                 {/**Biography */}
                 <View style={tw`my-6 mx-4 gap-1 `}>
                   <Text style={tw`text-neutral-300 text-lg `}>Biography</Text>
                  <Text style={tw`text-neutral-500 tracking-wider`}>John Doe is a passionate innovator and entrepreneur, renowned for his contributions to sustainable technology. Born in a small town, his curiosity for science and innovation led him to earn a degree in Environmental Engineering. Over the years, John founded multiple startups focused on renewable energy solutions, including a breakthrough solar technology company that reduced energy costs for thousands of households. Beyond his professional achievements, John is an advocate for education, dedicating time to mentor young minds and promote STEM fields. His vision of a greener, more inclusive future continues to inspire communities worldwide, making him a true changemaker. </Text> 
                 </View>
     
                 {/** Movies */}
                 <Movielist tittle='Movies' hideSeeAll={true} colored={true} data={personMovies} />
               </View>
        )
          
        }
       
    </ScrollView>
    </>
  )
}