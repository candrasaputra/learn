import React, { useEffect } from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';

export default (props) => {
    useEffect(() => {
        console.log('Hook play screen')
      }, []);
      
    return (
        <View style={styles.container}>
            <Text>Play</Text>
            <Button title="Go to End" onPress={() => props.navigation.navigate('End')} />
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
