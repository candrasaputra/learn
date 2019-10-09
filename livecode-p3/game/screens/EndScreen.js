import React, { useEffect } from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';

export default (props) => {
    useEffect(() => {
        console.log('Hook End screen')
      }, []);
      
    return (
        <View style={styles.container}>
            <Text>End</Text>
            <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
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
