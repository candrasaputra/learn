import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Counter extends Component {
    state = {
        counter: 0
    }
    
    componentDidMount() {
        setInterval(() => {
           this.setState({ counter: this.state.counter+1 }) 
        }, 1000);
    }
    
    render() {
        let {color, size} = this.props;
        
        return (
            <View>
                <Text style={{color, fontSize: size}}>{this.state.counter}</Text>
            </View>
        )
    }
}

export default Counter