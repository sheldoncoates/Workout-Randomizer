import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/DecisionButtonStyle';

export default class DecisionButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.DecisionButton, this.props.style]} onPress={this.props.onPress}>
                <Text style={[styles.DecisionButtonText, {color:this.props.textColour}]}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}