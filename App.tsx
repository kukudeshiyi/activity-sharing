import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Login from "./src/components/login";
import Home from "./src/components/home";
import Search from "./src/components/search";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Login />
//       {/* <Text>over</Text>
//       <StatusBar style="auto" /> */}
//     </View>
//   );
// }
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <NavigationContainer>
      {isLogIn ? (
        <Drawer.Navigator drawerType="slide" drawerContent={() => <Search />}>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      ) : (
        <Login setLogStatus={(value) => setIsLogIn(value)} />
      )}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
