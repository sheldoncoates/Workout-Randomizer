import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class IntervalScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Intervals coming soon</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});