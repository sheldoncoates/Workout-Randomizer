import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import WorkoutButton from '../Components/WorkoutButton';
import styles from '../Styles/HomeScreenStyle';
export default class WorkoutScreen extends Component {

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
        if(this.state.count == this.state.maxExercises){
            //dont update state
        }else{
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
    toggleMaxExercises(e){
        switch(e){
            case "back":
                this.setState({ maxExercises: 9});
                break;
            case "biceps":
                this.setState({ maxExercises: 5});
                break;
            case "chest":
                this.setState({ maxExercises: 10});
                break;
            case "triceps":
                this.setState({ maxExercises: 7});
                break;
            case "legs":
                this.setState({ maxExercises: 17});
                break;
            case "shoulder":
                this.setState({ maxExercises: 8});
                break;
            case "abdomen":
                this.setState({ maxExercises: 18});
                break;
            default:
                this.setState({ maxExercises: 0});
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.heading}>Choose the muscle group you want to workout then choose how many exercises</Text>
                        <WorkoutButton group="Back" onPress={() => { this.toggleModal(true), this.toggleGroup("back"), this.toggleMaxExercises("back") }} style={{ backgroundColor: 'rgb(0, 191, 255)' }} />
                        <WorkoutButton group="Biceps" onPress={() => { this.toggleModal(true), this.toggleGroup("biceps"), this.toggleMaxExercises("biceps") }} style={{ backgroundColor: 'rgb(254, 3, 34)' }} />
                        <WorkoutButton group="Chest" onPress={() => { this.toggleModal(true), this.toggleGroup("chest"), this.toggleMaxExercises("chest") }} style={{ backgroundColor: 'rgb(154, 142, 200)' }} />
                        <WorkoutButton group="Triceps" onPress={() => { this.toggleModal(true), this.toggleGroup("triceps"), this.toggleMaxExercises("triceps") }} style={{ backgroundColor: 'rgb(254, 149, 49)' }} />
                        <WorkoutButton group="Legs" onPress={() => { this.toggleModal(true), this.toggleGroup("legs"), this.toggleMaxExercises("legs") }} style={{ backgroundColor: 'rgb(254, 70, 213)' }} />
                        <WorkoutButton group="Shoulders" onPress={() => { this.toggleModal(true), this.toggleGroup("shoulder"), this.toggleMaxExercises("shoulder") }} style={{ backgroundColor: '#00293C' }} />
                        <WorkoutButton group="Abdomen" onPress={() => { this.toggleModal(true), this.toggleGroup("abdomen"), this.toggleMaxExercises("abdomen") }} style={{ backgroundColor: '#009900' }} />
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
                                    this.props.navigation.navigate('Exercises', {
                                        mGroup: this.state.muscleGroup,
                                        exercises: this.state.count,
                                        flag: true
                                    }), this.toggleModal(!this.state.modalVisible), this.resetCount(), this.resetGroup()
                                }} style={{ paddingBottom: 10 }}>
                                    <View style={[styles.DecisionButton, { backgroundColor: '#3399FF' }]}>
                                        <Text style={styles.DecisionButtonText}>Start</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.toggleModal(!this.state.modalVisible, this.resetCount()) }}>
                                    <View style={[styles.DecisionButton, { backgroundColor: '#F0F0F0' }]}>
                                        <Text style={[styles.DecisionButtonText, { color: '#000' }]}>Back</Text>
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