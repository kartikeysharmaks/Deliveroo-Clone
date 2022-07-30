import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishCard = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemsToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemsFromBasket = () => {
    if (items.length >= 0) {
      dispatch(removeFromBasket({ id }));
    } else return;
  };

  return (
    <>
      <TouchableOpacity className="flex-row p-4 bg-white mb-2">
        <View className="flex-1">
          <Text className="font-bold text-base pb-2">{name}</Text>
          <Text className="text-gray-500 text-xs pb-2">{description}</Text>
          <Text className="text-gray-500 text-xs">₹ {price}</Text>
          <View className="flex-row items-center mt-4 space-x-2">
            <TouchableOpacity onPress={addItemsToBasket}>
              <PlusCircleIcon size={25} color="#00CCBB" />
            </TouchableOpacity>
            <Text className="text-gray-500 font-semibold">{items.length}</Text>
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemsFromBasket}
            >
              <MinusCircleIcon
                size={25}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex justify-center">
          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-24 w-24 rounded-2xl"
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default DishCard;
