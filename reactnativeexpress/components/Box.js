import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Box extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.box}>
                    <View style={style.eye}>
                        <View style={style.circle}></View>
                        <View style={style.circle}></View>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
   },
   box: {
       height: 200,
       width: 200,
       backgroundColor: "skyblue",
       borderWidth: 2,
       borderRadius: 20
   },
   circle: {
        borderRadius: 100,
        height: 50,
        width: 50,
        backgroundColor: "red",
        borderWidth: 2
   },
   eye: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20
   }
});

export default Box;