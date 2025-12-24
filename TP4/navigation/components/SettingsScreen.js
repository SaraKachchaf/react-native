import React from "react";

import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


 

const SettingsScreen = () => {

    const navigation = useNavigation();

  return (

    <View

      style={{

        flex: 1,

        alignItems: "center",

        justifyContent: "center",

        backgroundColor: "yellow",

      }}

    >

      <Text>Settings Screen</Text>

    </View>

  );

};

export default SettingsScreen;