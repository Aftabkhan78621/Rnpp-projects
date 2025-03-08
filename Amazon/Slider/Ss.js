import { View, Text, SafeAreaView, Dimensions, Image, Animated, FlatList } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-native-snap-carousel";

export default function Ss() {
  const Screenwidth = Dimensions.get("window").width;
  const [ss, setss] = useState([]);
  const sliderref = useRef(null);
  const Api = `gfSu9PGF07joIjlhSkWtSstFfIqPCNgqSGt0QiikC0k`;
 

  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?query=Home&client_id=${Api}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setss((prevImages) => [...prevImages, ...data.results])
        }
      })
      .catch((error) => console.error("Error:", error));
  }
  useEffect(() => {
    fetchImages()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.urls.regular }}
          style={{ height: 240, width: Screenwidth }}
        />
      </View>
    );
  };

  const data = [1,2,3]
  const dotsAnimated = useRef(new Animated.Value(0)).current;
  const Animateddots = ()=>{
    Animated.sequence([
      Animated.timing(dotsAnimated,
        {
          toValue : 1,
          duration: 500,
          useNativeDriver: true
        })
        ,  Animated.timing(dotsAnimated,
          {
            toValue : 0,
            duration: 500,
            useNativeDriver: true
          }
          , 
      )
    ])
  }

 






  return (
    <SafeAreaView>
      <Carousel
        data={ss}
        ref={sliderref}
        renderItem={renderItem}
        sliderWidth={Screenwidth}
        itemWidth={Screenwidth}
      // autoplay={true}
      // loop={true}
      // onSnapToItem={(index) =>{
      //     if(index === ss.length - 1){
      //         return(
      //             fetchImages()
      //         )
      //     }
      // } }
      />
      <View>
        <FlatList  />
      </View>











    </SafeAreaView>
  );
}
