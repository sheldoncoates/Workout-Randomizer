import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppStyles from '../config/styles';


export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings coming soon</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppStyles.colors.lightWhite
    }
});