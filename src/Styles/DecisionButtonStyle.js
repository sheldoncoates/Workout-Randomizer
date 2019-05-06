import {StyleSheet, Dimensions } from 'react-native';
export default styles = StyleSheet.create({
    DecisionButton: {
        width: Dimensions.get('window').width - 250,
        height: 30,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    DecisionButtonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 30,
    },
});