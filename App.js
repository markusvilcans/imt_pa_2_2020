import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';



export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'
      }}>
      <Image source={require('./assets/patrick.jpg')}/>
      <Text>Hello world from group G3: Natalija Andersone!</Text>
      <Text>This is my Natalija Andersone first React Native application!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     aligntItems: 'center',
     justifyContent: 'center',
      textAlign: 'center'
   },
});
