import React from "react";

import { View, Text , Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {

    const navigation = useNavigation();

  return (

    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
      }}

    >

    <Button title="Go back" onPress={() => navigation.goBack()} />

    <Text>Profile Screen</Text>

    </View>

  );

};


export default ProfileScreen;