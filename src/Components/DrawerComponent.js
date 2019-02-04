import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class DrawerComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <View style={styles.underline}>
                        <Ionicons name="md-home" size={32} color="black" style={{paddingLeft: 10, paddingTop: 1}}/>
                        <Text style={styles.text}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <View style={styles.underline}>
                        <Ionicons name="md-settings" size={32} color="black" style={{paddingLeft: 10, paddingTop: 1}}/>
                        <Text style={styles.text}>Settings</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: '#000',
        paddingLeft: 10,
        paddingTop: 5,
    },
    underline: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        paddingBottom: 5,
        flexDirection: 'row',
    }
});