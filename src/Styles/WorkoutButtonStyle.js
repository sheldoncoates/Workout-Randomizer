import {StyleSheet, Dimensions } from 'react-native';
export default styles = StyleSheet.create({
    button: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonInternals: {
        flex: 1,
        flexDirection: 'row',  
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        backgroundColor: '#8470FF',
    },
    text: {
        width: Dimensions.get('window').width - 110,
        paddingLeft: 27,
        height: 50,
        lineHeight: 50,
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        fontWeight: '200',
    },
});