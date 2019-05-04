import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Styles/ExercisesScreenStyle';
import { BackData } from '../Data/BackData.js';
import { BicepData } from '../Data/BicepData.js';
import { ChestData } from '../Data/ChestData.js';
import { TricepData } from '../Data/TricepData.js';
import { LegData } from '../Data/LegData.js';
import { ShoulderData } from '../Data/ShoulderData.js';
import { AbdomenData } from '../Data/AbdomenData.js';

export default class ExercisesScreen extends Component {
    constructor(props) {
        super(props);
        this.exerciseArray = [""];
        this.randomizedExerciseArray = [""];
        this.Group = "";
        this.Exercises = "";
        this.flag = true;
    }
    state = {
        modalVisible: false,
        description: "",
        exercise: ""
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    populateArray(group, exercises) {
        var randIndex = 0;
        if (this.flag) {
            this.flag = false;
            if (group == "back") {
                BackData.map((exercise, index) => this.exerciseArray[index] = exercise.Name)
            } else if (group == "biceps") {
                BicepData.map((exercise, index) => this.exerciseArray[index] = exercise.Name)
            } else if (group == "chest") {
                ChestData.map((exercise, index) => this.exerciseArray[index] = exercise.Name)
            } else if (group == "triceps") {
                TricepData.map((exercise, index) => this.exerciseArray[index] = exercise.Name)
            } else if (group == "legs") {
                LegData.map((exercise, index) => this.exerciseArray[index] = exercise.Name)
            } else if (group == "shoulder") {
                ShoulderData.map((exercise, index) => this.exerciseArray[index] = exercise.Name)
            } else if (group == "abdomen") {
                AbdomenData.map((exercise, index) => this.exerciseArray[index] = exercise.Name)
            }
            for (i = 0; i < exercises; i++) {
                randIndex = this.getRandomInt(this.exerciseArray.length);
                while (this.randomizedExerciseArray.indexOf(this.exerciseArray[randIndex]) > -1) {
                    randIndex = this.getRandomInt(this.exerciseArray.length);
                }
                this.randomizedExerciseArray[i] = this.exerciseArray[randIndex];
            }
            return this.randomizedExerciseArray;
        } else {
            return this.randomizedExerciseArray;
        }
    }
    setDescription(group, index) {
        if (group == "back") {
            this.state.description = BackData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Description;
            this.state.exercise = BackData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Name;
        } else if (group == "biceps") {
            this.state.description = BicepData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Description;
            this.state.exercise = BicepData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Name;
        } else if (group == "chest") {
            this.state.description = ChestData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Description;
            this.state.exercise = ChestData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Name;
        } else if (group == "triceps") {
            this.state.description = TricepData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Description;
            this.state.exercise = TricepData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Name;
        } else if (group == "legs") {
            this.state.description = LegData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Description;
            this.state.exercise = LegData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Name;
        } else if (group == "shoulder") {
            this.state.description = ShoulderData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Description;
            this.state.exercise = ShoulderData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Name;
        } else if (group == "abdomen") {
            this.state.description = AbdomenData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Description;
            this.state.exercise = AbdomenData[this.exerciseArray.indexOf(this.randomizedExerciseArray[index])].Name;
        } else {
            this.state.description = "Description not available";
            this.state.exercise = "Exercise not available";
        }
    }
    componentWillReceiveProps() {
        this.flag = this.props.navigation.state.params.flag;
    }
    render() {
        this.Group = this.props.navigation.state.params.mGroup;
        this.Exercises = this.props.navigation.state.params.exercises;
        return (
            <View style={this.state.modalVisible ? styles.transparent : styles.container}>
                <ScrollView>
                    <Text style={styles.heading}>Tap the {this.Group} exercise to see the description</Text>
                    {
                        this.populateArray(this.Group, this.Exercises).map((item, index) =>
                            (
                                <TouchableOpacity key={index} onPress={() => {
                                    this.setDescription(this.Group, index),
                                        this.props.navigation.navigate('Descriptions', {
                                            exercise: this.state.exercise,
                                            description: this.state.description
                                        });
                                }} style={styles.button}>
                                    <View style={styles.buttonInternals}>
                                        <Text style={styles.text}>{item.length <= 20 ? item : item.substr(0, 17) + "..."}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                    }
                </ScrollView>
            </View >
        );
    }
}