import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../Styles/WorkoutButtonStyle';

export default class WorkoutButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <View style={styles.buttonInternals}>
                    <Image source={require('../../assets/dumbbell.png')} style={styles.image} />
                    <Text style={[styles.text, this.props.style]}>{this.props.group}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}