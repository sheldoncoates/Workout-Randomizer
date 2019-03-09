import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../Styles/WorkoutButtonStyle';
import { Icon } from 'react-native-elements'


export default class WorkoutButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <View style={styles.buttonInternals}>
                    <Text style={styles.text}>{this.props.group}</Text>
                    <Icon name='arrow-forward' color='#fff' containerStyle={{alignItems: 'flex-end'}} />
                </View>
            </TouchableOpacity>
        );
    }
}