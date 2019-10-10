import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PlayScreen from './screens/PlayScreen';
import EndScreen from './screens/EndScreen';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! 11</Text>
    </View>
  );
}

const SwitchNavigation = createAppContainer(createSwitchNavigator(
  {
    Home: HomeScreen,
    Play: PlayScreen,
    End: EndScreen,
  }
));

export default () => {
  return (
    <Provider store={store}>
      <SwitchNavigation />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
