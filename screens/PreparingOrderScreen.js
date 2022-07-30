import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
   const navigation = useNavigation();

   useEffect(() => {
     setTimeout(()=>{
        navigation.navigate("Delivery")
     },3000)
   }, []);
   
  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center">
     <Animatable.Image
     source={require("../assets/cooking.gif")}
     animation="slideInUp"
     iterationCount={1}
     className="h-96 w-96"
     />
     <Animatable.Text
     animation="slideInUp"
     iterationCount={1}
     className="text-base my-10 font-bold text-center"
     >
        Waiting for restaurant to accept your order
     </Animatable.Text>
     <Progress.Circle size={50} indeterminate={true} color="black"/>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;