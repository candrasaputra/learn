import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PlayScreen from './screens/PlayScreen';
import EndScreen from './screens/EndScreen';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! 11</Text>
    </View>
  );
}

export default createAppContainer(createSwitchNavigator(
  {
    Home: HomeScreen,
    Play: PlayScreen,
    End: EndScreen,
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
