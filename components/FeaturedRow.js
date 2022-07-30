import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import sanityClient, { urlFor } from "../sanity";

const FeaturedRow = ({id, title, description }) => {
    const [restaurants,setRestaurants] = useState([]);
  
    useEffect(() => {
     sanityClient.fetch(`
     *[_type=="featured" && _id == $id]{
        ...,
        restaurants[]->{
            ...,
            dishes[]->,
            type-> {
                name
            }
        },
     }[0]
     `,{id}).then((data)=>{
        setRestaurants(data?.restaurants);
    });
    }, []);

  return (
    <View>
      <View className="flex-row justify-between items-center mt-4 px-4">
        <Text className="font-bold text-base uppercase">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"}/>
      </View>
      <Text className="text-xs text-gray-500 px-4">
        {description}
      </Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
       {restaurants?.map((restaurant)=>(
        <FeaturedCard
        key={restaurant._id}
        id={restaurant._id}
        imgUrl={urlFor(restaurant.image).url()}
        address={restaurant.address}
        title={restaurant.name}
        dishes={restaurant.dishes}
        rating={restaurant.rating}
        description={restaurant.description}
        long={restaurant.long}
        lat={restaurant.lat}
        genre={restaurant.type?.name}
        />
       ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
