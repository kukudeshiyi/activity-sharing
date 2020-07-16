import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './src/components/login';
import Home from './src/components/home';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Login />
//       {/* <Text>over</Text>
//       <StatusBar style="auto" /> */}
//     </View>
//   );
// }
export default function App() {
  return (
    // <Login />
    <Home />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
