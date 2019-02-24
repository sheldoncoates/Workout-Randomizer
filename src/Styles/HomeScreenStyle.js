import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 20,
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52,52,52,0.3)',
    },
    modal: {
        width: Dimensions.get('window').width - 100,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center'
    },
    modalHeading: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        fontSize: 16,
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
        color: '#000',
        fontWeight: '500',
    },
    Countertext: {
        fontSize: 32,
        color: '#000',
        fontWeight: '500',
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
        color: '#fff',
        fontWeight: '500',
        lineHeight: 30,
    }
});
