import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Linking } from 'react-native';
import styles from '../Styles/DescriptionsScreenStyle';


export default class DescriptionsScreen extends Component {
    constructor(props) {
        super(props);
        this.exercise = "";
        this.description = "";
    }
    render() {
        this.exercise = this.props.navigation.state.params.exercise;
        this.description = this.props.navigation.state.params.description;
        return (
            <View style={styles.container}>
                <ScrollView >
                    <Text style={styles.heading}>{this.exercise}</Text>
                    {
                        this.description.map((item, index) =>
                            (
                                <View key={index} style={styles.section}>
                                    <Text style={styles.sectionText}>{item}</Text>
                                </View>
                            ))
                    }
                    <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://www.bodybuilding.com')}>
                        <Text style={{ color: 'blue' }}>BodyBuilding.com</Text>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        );
    }
}
