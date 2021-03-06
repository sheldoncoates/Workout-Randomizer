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
        paddingTop: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 20,
        fontSize: 18,
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
        width: Dimensions.get('window').width - 100,
        height: 320,
        backgroundColor: '#4e525b',
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 0.5,
        alignItems: 'center'
    },
    modalHeading: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        fontSize: 18,
        fontWeight: '300',
        color: '#fff',
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
        fontSize: 60,
        color: '#fff',
        fontWeight: '300',
    },
    Countertext: {
        fontSize: 32,
        color: '#fff',
        fontWeight: '300',
    },
    modalButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 5,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 1 },
    },
    Browse:{
        color: 'blue',
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    }
});
