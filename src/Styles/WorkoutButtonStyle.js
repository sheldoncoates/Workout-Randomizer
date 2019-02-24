import {StyleSheet, Dimensions } from 'react-native';
export default styles = StyleSheet.create({
    button: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 1,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 2 },
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonInternals: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width - 30,
        height: 100,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    image: {
        width: 70,
        height: 70,
    },
    text: {
        width: Dimensions.get('window').width - 30,
        height: 30,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        lineHeight: 30,
        fontWeight: '500',
    },
});