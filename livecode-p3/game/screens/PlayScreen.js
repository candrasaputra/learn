import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setGameSetting} from '../store/action';

import { Text, View, Button, Alert, StyleSheet } from 'react-native';

export default (props) => {
    const gameStting = useSelector(state => state.game)
    const dispatch = useDispatch();
    
    const [game, setGame] = useState({
        turn: 0,
        box1: {
            number: 1,
            player1: false,
            player2: false
        },
        box2: {
            number: 2,
            player1: false,
            player2: false
        }
    });

    useEffect(() => {
        console.log('Hook play screen')

        console.log(game.box1.number)
    }, []);

    useEffect(() => {
        console.log('Keterigger')
        console.log(game)
        if(game.box1.number === 3) {
            
        }        
    }, [game.box1.player1]);

    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(gameStting)}</Text>
            <Text>Play</Text>
            <Button title="Go to End" onPress={() => props.navigation.navigate('End')} />
            <View style={{paddingTop: 2}}>
            <Button title="Incres" onPress={() => dispatch(setGameSetting({
                ...game,
                box1: {
                    ...game.box1,
                    number: game.box1.number + 1
                }
            }))} />
            </View>
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
