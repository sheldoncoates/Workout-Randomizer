import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    transparent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.4,
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
    },
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
        height: 50,
        lineHeight: 50,
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        fontWeight: '200',

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 1, },
        shadowColor: 'black',
        shadowOpacity: 0.3,
    },
    modal: {
        justifyContent: 'center',
        width: Dimensions.get('window').width - 100,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5
    },
    modalHeading: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    modalText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 48,
        color: '#000',
        fontWeight: '200',
    },
    Countertext: {
        fontSize: 32,
        color: '#000',
        fontWeight: '200',
    },
    modalButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 5,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 1 },
    },
    doneButtonContainer: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 1,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 2 },
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 25,
    },
    DoneButton: {
        width: Dimensions.get('window').width - 20,
        height: 40,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#F0F0F0'
    },
    DoneButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
        lineHeight: 40,
    },
    DunButton: {
        width: Dimensions.get('window').width - 180,
        height: 40,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#F0F0F0'
    },
});