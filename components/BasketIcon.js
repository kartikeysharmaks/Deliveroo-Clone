import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  
  if(items.length===0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
     <TouchableOpacity onPress={()=>navigation.navigate("Basket")} className="mx-5 flex-row items-center p-3 rounded-lg space-x-1 bg-[#00CCBB]">
        <Text className="text-white text-base font-extrabold py-1 px-2 bg-[#01A296]">
            {items.length}
        </Text>
        <Text className="text-white font-extrabold flex-1 text-base text-center">
            View Basket
        </Text>
        <Text className="text-white text-base font-extrabold">
        ₹ {basketTotal}
        </Text>
     </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
