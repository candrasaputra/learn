import React, { useEffect } from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';

export default (props) => {
    useEffect(() => {
        console.log('Hook home screen')
      }, []);
      
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Go to Play" onPress={() => props.navigation.navigate('Play')} />
        </View>
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
