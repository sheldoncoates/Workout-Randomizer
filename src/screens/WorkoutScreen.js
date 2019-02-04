import React, { Component } from 'react';
import { View, StyleSheet, Text, Modal, TouchableOpacity, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import WorkoutButton from '../Components/WorkoutButton';
export default class WorkoutScreen extends Component {

    state = {
        modalVisible: false,
        muscleGroup: "",
        count: 0,
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    toggleGroup(ex) {
        this.setState({ muscleGroup: ex });
    }
    incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }
    decrementCount() {
        if (this.state.count == 0) {
            this.state.count = 0;
        } else {
            this.setState({ count: this.state.count - 1 });
        }
    }
    resetCount() {
        this.state.count = 0;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.heading}>Choose the muscle group you want to workout then choose how many exercises</Text>
                        <WorkoutButton muscleGroup="Back" onPress={() => { this.toggleModal(true), this.toggleGroup("back") }} style={{ backgroundColor: 'rgb(0, 191, 255)' }} />
                        <WorkoutButton muscleGroup="Biceps" onPress={() => { this.toggleModal(true), this.toggleGroup("biceps") }} style={{ backgroundColor: 'rgb(254, 3, 34)' }} />
                        <WorkoutButton muscleGroup="Chest" onPress={() => { this.toggleModal(true), this.toggleGroup("chest") }} style={{ backgroundColor: 'rgb(154, 142, 200)' }} />
                        <WorkoutButton muscleGroup="Triceps" onPress={() => { this.toggleModal(true), this.toggleGroup("triceps") }} style={{ backgroundColor: 'rgb(254, 149, 49)' }} />
                        <WorkoutButton muscleGroup="Legs" onPress={() => { this.toggleModal(true), this.toggleGroup("legs") }} style={{ backgroundColor: 'rgb(254, 70, 213)' }} />
                        <WorkoutButton muscleGroup="Shoulders" onPress={() => { this.toggleModal(true), this.toggleGroup("shoulders") }} style={{ backgroundColor: '#00293C' }} />
                        <WorkoutButton muscleGroup="Abdomen" onPress={() => { this.toggleModal(true), this.toggleGroup("abs") }} style={{ backgroundColor: '#009900' }} />
                    </ScrollView>
                </View>
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
                                <Text style={styles.modalHeading}>How many {this.state.muscleGroup} exercises would you like to do?</Text>
                                <Text style={styles.modalText}>{this.state.count}</Text>
                                <View style={styles.row}>
                                    <TouchableOpacity onPress={() => { this.decrementCount() }} style={{ paddingBottom: 20 }}>
                                        <View style={styles.modalButton}>
                                            <Text style={styles.Countertext}>-</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { this.incrementCount() }} style={{ paddingBottom: 20 }}>
                                        <View style={styles.modalButton}>
                                            <Text style={styles.Countertext}>+</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('ExerciseScreen', {
                                        mGroup: this.state.muscleGroup,
                                        exercises: this.state.count,
                                    }),
                                        this.toggleModal(!this.state.modalVisible), this.resetCount()
                                }} style={{ paddingBottom: 10 }}>
                                    <View style={[styles.DecisionButton, { backgroundColor: '#3399FF' }]}>
                                        <Text style={styles.DecisionButtonText}>Start</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.toggleModal(!this.state.modalVisible, this.resetCount()) }}>
                                    <View style={[styles.DecisionButton, { backgroundColor: '#F0F0F0' }]}>
                                        <Text style={[styles.DecisionButtonText, {color: '#000'}]}>Back</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </View>
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
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
        lineHeight: 30,
    }
});
