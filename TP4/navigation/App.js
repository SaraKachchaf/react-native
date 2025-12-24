import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSceen from "./components/HomeSceen";
import ProfileScreen from "./components/ProfileScreen";
import SettingsScreen from "./components/SettingsScreen";


const Stack = createNativeStackNavigator();

 

const App = () => {

  return (

    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeSceen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};

export default App;