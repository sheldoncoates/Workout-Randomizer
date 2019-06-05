import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import WorkoutButton from '../Components/WorkoutButton';
import DecisionButton from '../Components/DecisionButton';
import styles from '../Styles/HomeScreenStyle';
import { BackData } from '../Data/BackData.js';
import { BicepData } from '../Data/BicepData.js';
import { ChestData } from '../Data/ChestData.js';
import { TricepData } from '../Data/TricepData.js';
import { LegData } from '../Data/LegData.js';
import { ShoulderData } from '../Data/ShoulderData.js';
import { AbdomenData } from '../Data/AbdomenData.js';

export default class HomeScreen extends Component {

    state = {
        modalVisible: false,
        muscleGroup: "",
        count: 0,
        maxExercises: 0
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    toggleGroup(ex) {
        this.setState({ muscleGroup: ex });
    }
    incrementCount() {
        if (this.state.count == this.state.maxExercises) {
            //dont update state
        } else {
            this.setState({ count: this.state.count + 1 });
        }
    }
    decrementCount() {
        if (this.state.count == 0) {
            this.setState({ count: 0 });
        } else {
            this.setState({ count: this.state.count - 1 });
        }
    }
    resetCount() {
        this.setState({ count: 0 });
    }
    resetGroup() {
        this.setState({ muscleGroup: "" });
    }
    toggleMaxExercises(e) {
        switch (e) {
            case "back":
                this.setState({ maxExercises: BackData.length });
                break;
            case "biceps":
                this.setState({ maxExercises: BicepData.length });
                break;
            case "chest":
                this.setState({ maxExercises: ChestData.length });
                break;
            case "triceps":
                this.setState({ maxExercises: TricepData.length });
                break;
            case "legs":
                this.setState({ maxExercises: LegData.length });
                break;
            case "shoulder":
                this.setState({ maxExercises: ShoulderData.length });
                break;
            case "abdomen":
                this.setState({ maxExercises: AbdomenData.length });
                break;
            default:
                this.setState({ maxExercises: 0 });
                break;
        }
    }
    render() {
        return (
            <View style={this.state.modalVisible ? styles.transparent : styles.container}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.heading}>Choose the muscle group you want to workout then choose how many exercises</Text>
                        <WorkoutButton group="Back" onPress={() => { this.toggleModal(true), this.toggleGroup("back"), this.toggleMaxExercises("back") }} />
                        <WorkoutButton group="Biceps" onPress={() => { this.toggleModal(true), this.toggleGroup("biceps"), this.toggleMaxExercises("biceps") }} />
                        <WorkoutButton group="Chest" onPress={() => { this.toggleModal(true), this.toggleGroup("chest"), this.toggleMaxExercises("chest") }} />
                        <WorkoutButton group="Triceps" onPress={() => { this.toggleModal(true), this.toggleGroup("triceps"), this.toggleMaxExercises("triceps") }} />
                        <WorkoutButton group="Legs" onPress={() => { this.toggleModal(true), this.toggleGroup("legs"), this.toggleMaxExercises("legs") }} />
                        <WorkoutButton group="Shoulders" onPress={() => { this.toggleModal(true), this.toggleGroup("shoulder"), this.toggleMaxExercises("shoulder") }} />
                        <WorkoutButton group="Abdomen" onPress={() => { this.toggleModal(true), this.toggleGroup("abdomen"), this.toggleMaxExercises("abdomen") }} />
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('AllExercises'), this.resetCount(), this.resetGroup() }}>
                            <Text style={styles.Browse}>Browse All</Text>
                        </TouchableOpacity>
                        <Text style={styles.heading}>Copyright Sheldon Coates 2019</Text>
                    </ScrollView>
                </View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.toggleModal(false) }}
                >
                    <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={1}
                        onPressOut={() => { this.toggleModal(false), this.resetCount() }}
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
                                <DecisionButton text='Start' textColour='#fff' style={{ backgroundColor: '#3399FF' }} onPress={() => {
                                    if (this.state.count == 0) {
                                        //don't navigate or anything
                                    } else {
                                        this.props.navigation.navigate('Exercises', {
                                            mGroup: this.state.muscleGroup,
                                            exercises: this.state.count,
                                            flag: true
                                        }), this.toggleModal(!this.state.modalVisible), this.resetCount(), this.resetGroup()
                                    }
                                }} />
                                <View style={{ padding: 5 }}></View>
                                <DecisionButton text='Cancel' textColour='#000' style={{ backgroundColor: '#F0F0F0' }} onPress={() => { this.toggleModal(!this.state.modalVisible, this.resetCount()) }} />
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </View >
        );
    }
}