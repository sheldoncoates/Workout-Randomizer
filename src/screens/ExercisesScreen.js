import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Modal, TouchableOpacity, Image, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';

export default class ExercisesScreen extends Component {
    constructor() {
        super();
        this.Array_Items = [];
        this.backItems = [
            'Deadlifts',
            'Lat Pulldowns',
            'Rows',
        ];
        this.bicepItems = [
            'Dumbbell Curls',
            'Barbell Curls',
            'Preacher Curls',
        ];
        this.chestItems = [
            'Bench Press',
            'Incline Bench Press',
            'Decline Bench Press',
        ];
        this.tricepItems = [
            'Skull Crushers',
            'Cable Pulls',
            'Two Hand Cable Pull',
        ];
        this.legItems = [
            'Squats',
            'Leg Extensions',
            'Calf Raises',
        ];
        this.shoulderItems = [
            'Shoulder Press',
            'Flys',
            'Raises',
        ];
        this.abodomenItems = [
            'Sit-ups',
            'Crunches',
            'Twists',
        ];
    }
    state = {
        modalVisible: false,
        description: "",
        muscelGroup: ""
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    populateArray(muscelGroup, exercises) {
        if (muscelGroup == "back") {
            this.muscelGroup = "back";
            for (i = 0; i < exercises; i++) {
                this.Array_Items[i] = this.backItems[i];
            }
        } else if (muscelGroup == "biceps") {
            this.muscelGroup = "biceps";
            for (i = 0; i < exercises; i++) {
                this.Array_Items[i] = this.bicepItems[i];
            }
        } else if (muscelGroup == "chest") {
            this.muscelGroup = "chest";
            for (i = 0; i < exercises; i++) {
                this.Array_Items[i] = this.chestItems[i];
            }
        } else if (muscelGroup == "triceps") {
            this.muscelGroup = "triceps";
            for (i = 0; i < exercises; i++) {
                this.Array_Items[i] = this.tricepItems[i];
            }
        } else if (muscelGroup == "legs") {
            this.muscelGroup = "legs";
            for (i = 0; i < exercises; i++) {
                this.Array_Items[i] = this.legItems[i];
            }
        } else if (muscelGroup == "shoulders") {
            this.muscelGroup = "shoulders";
            for (i = 0; i < exercises; i++) {
                this.Array_Items[i] = this.shoulderItems[i];
            }
        } else if (muscelGroup == "abs") {
            this.muscelGroup = "abs";
            for (i = 0; i < exercises; i++) {
                this.Array_Items[i] = this.abdomenItems[i];
            }
        }
    }
    setDescription(item) {
        if (item == "done") {
            this.description = <View style={styles.container}>
                <Text style={styles.modalHeading}>Are you sure you are done your workout?</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Workout'),
                        this.Array_Items = [],
                        this.muscelGroup = "",
                        this.toggleModal(!this.state.modalVisible),
                        this.description = <Text></Text>
                }} style={{ paddingBottom: 20, paddingTop: 10 }}>
                    <View style={styles.DunButton}>
                        <Text style={styles.DoneButtonText}>Done</Text>
                    </View>
                </TouchableOpacity>
            </View>
        }
        if (this.muscelGroup == "biceps") {
            if (item == "Dumbbell Curls") {
                this.description = <Text style={styles.modalHeading}>This is the dumbbell curls description</Text>;
            } else if (item == "Barbell Curls") {
                this.description = <Text style={styles.modalHeading}>This is the Barbell curls description</Text>;
            }
            else if (item == "Preacher Curls") {
                this.description = <Text style={styles.modalHeading}>This is the Preacher curls description</Text>;
            }
        }
    }
    render() {
        const { navigation } = this.props;
        const mGroup = navigation.getParam('mGroup', 'NO-ID');
        const exercises = navigation.getParam('exercises', 'some default value');
        this.populateArray(mGroup, exercises);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.heading}>Tap a {mGroup} exercise to see a description</Text>
                    {
                        this.Array_Items.map((item, key) =>
                            (
                                <TouchableOpacity key={key} onPress={() => { this.toggleModal(true), this.setDescription(item) }} style={styles.button}>
                                    <View style={styles.buttonInternals}>
                                        <Image source={require('../../assets/dumbbell.png')} style={styles.image} />
                                        <Text style={styles.text}>{item}</Text>
                                    </View>
                                </TouchableOpacity>

                            ))

                    }

                </ScrollView>
                <TouchableOpacity onPress={() => {
                    this.toggleModal(true), this.setDescription("done")
                }} style={{ paddingBottom: 20, paddingTop: 10 }}>
                    <View style={styles.DoneButton}>
                        <Text style={styles.DoneButtonText}>Done</Text>
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.toggleModal(false) }}
                >
                    <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={1}
                        onPressOut={() => { this.toggleModal(false) }}
                    >
                        <TouchableWithoutFeedback>
                            <View style={styles.modal}>
                                {this.description}
                                <Button
                                    onPress={() => { this.toggleModal(!this.state.modalVisible) , this.description = <Text></Text>}}
                                    title="Back"
                                    color="#841584"
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
    },
    button: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 1,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 2 },
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonInternals: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width - 20,
        height: 100,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    image: {
        width: 70,
        height: 70,
    },
    text: {
        width: Dimensions.get('window').width - 20,
        height: 30,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        lineHeight: 30,
        fontWeight: '500',
        backgroundColor: 'rgb(0, 191, 255)'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52,52,52,0.3)',
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