import {Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoriesCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className="bg-white h-50 w-50 rounded-lg mx-1 relative">
      <Image 
      source={{
        uri:imgUrl,
      }}
      className="h-36 w-36 rounded-lg"
      >
        
      </Image>
      <Text className="font-bold absolute text-white bottom-2 left-3">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;