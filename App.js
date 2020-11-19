import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Image source={require('./assets/momo.jpg')}/>
       <Text>Hello World from Group G3 : Markus Vilcāns!</Text>
	    <Text>This is my Markus Vilcans first React Native application!</Text>
		<StatusBar style="auto" />
		
		

   

		
      
    </View>
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

