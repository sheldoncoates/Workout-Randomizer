import React, { Component } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from '../Styles/ExercisesScreenStyle';
export default class ExercisesScreen extends Component {
    constructor(props) {
        super(props);
        this.Array_Items = [""];
        this.G = "";
        this.E = "";
        this.flag = true;
        this.backItems = [
            'Deadlifts',
            'Lat Pulldowns',
            'Rows',
            'Dumbbell Rows',
            'Rowing Maching',
            'Pull-Ups',
            'Chin-Ups',
            'Rack-Pulls',
            'Standing Cable Reverse Fly'
        ];
        this.bicepItems = [
            'Dumbbell Curls',
            'Barbell Curls',
            'Preacher Curls',
            'Hammer Curls',
            'Cable Curls',
        ];
        this.chestItems = [
            'Bench Press',
            'Dumbbell Bench Press',
            'Incline Bench Press',
            'Dumbbell Incline Bench Press',
            'Decline Bench Press',
            'Dumbbell Decline Bench Press',
            'Push-Ups',
            'Peck Deck',
            'Chest Press',
            'Cable Flys'
        ];
        this.tricepItems = [
            'Tricep Dips',
            'Skull Crushers',
            'Over head Cable Pulls',
            'Front Cable Pulls',
            'Overhead Dumbbell Extension',
            'Tricep Press',
            'Tricep Bench Press'
        ];
        this.legItems = [
            'Squat Rack',
            'Kettlebell Swings',
            'Deadlifts',
            'Lunges',
            'Jump Squats',
            'Wall Sit',
            'Squat Rack Pulses',
            'Abductor',
            'Adductor',
            'Leg Press',
            'Hip Thrusts',
            'Box Jumps',
            'Leg Extensions',
            'Leg Curls',
            'Stair Climber',
            'Sideways Risistence Leg Extensions',
            'Burpees'
        ];
        this.shoulderItems = [
            'Dumbbell Shoulder Press',
            'Dumbbell Shoulder Press to Elbow Touch',
            'Barbell Shoulder Press',
            'Shoulder Press',
            'Dumbbell Flys',
            'Cable Flys',
            'Front Dumbbell Raises',
            'Front Cable Pulls',
        ];
        this.abdomenItems = [
            'Plank',
            'Side Plank',
            'Sit-ups',
            'Crunches',
            'V-Sit-ups',
            'Oblique Twists',
            'Leg Scissors',
            'Leg Raises',
            'Oblique Toe-Touches',
            'Leg raises',
            'Decline Sit-ups',
            'Standing Med-Ball Twists',
            'Kenisis Wall Lateral Pulls',
            'Jumping V-Plank',
            'Bicylces',
            'Med-Ball Sit-Ups',
            'Raised Leg Toe Touches',
            'Stability Ball Tuck',
        ];
    }
    state = {
        modalVisible: false,
        description: <Text></Text>,
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    populateArray(g, e) {
        var randIndex = 0;
        if (this.flag) {
            this.flag = false;
            switch (g) {
                case "back":
                    for (i = 0; i < e; i++) {
                        randIndex = this.getRandomInt(this.backItems.length);
                        while (this.Array_Items.indexOf(this.backItems[randIndex]) > -1) {
                            randIndex = this.getRandomInt(this.backItems.length);
                        }
                        this.Array_Items[i] = this.backItems[randIndex];
                    }
                    return this.Array_Items;
                case "biceps":
                    for (i = 0; i < e; i++) {
                        randIndex = this.getRandomInt(this.bicepItems.length);
                        while (this.Array_Items.indexOf(this.bicepItems[randIndex]) > -1) {
                            randIndex = this.getRandomInt(this.bicepItems.length);
                        }
                        this.Array_Items[i] = this.bicepItems[randIndex];
                    }
                    return this.Array_Items;
                case "chest":
                    for (i = 0; i < e; i++) {
                        randIndex = this.getRandomInt(this.chestItems.length);
                        while (this.Array_Items.indexOf(this.chestItems[randIndex]) > -1) {
                            randIndex = this.getRandomInt(this.chestItems.length);
                        }
                        this.Array_Items[i] = this.chestItems[randIndex];
                    }
                    return this.Array_Items;
                case "triceps":
                    for (i = 0; i < e; i++) {
                        randIndex = this.getRandomInt(this.tricepItems.length);
                        while (this.Array_Items.indexOf(this.tricepItems[randIndex]) > -1) {
                            randIndex = this.getRandomInt(this.tricepItems.length);
                        }
                        this.Array_Items[i] = this.tricepItems[randIndex];
                    }
                    return this.Array_Items;
                case "legs":
                    for (i = 0; i < e; i++) {
                        randIndex = this.getRandomInt(this.legItems.length);
                        while (this.Array_Items.indexOf(this.legItems[randIndex]) > -1) {
                            randIndex = this.getRandomInt(this.legItems.length);
                        }
                        this.Array_Items[i] = this.legItems[randIndex];
                    }
                    return this.Array_Items;
                case "shoulder":
                    for (i = 0; i < e; i++) {
                        randIndex = this.getRandomInt(this.shoulderItems.length);
                        while (this.Array_Items.indexOf(this.shoulderItems[randIndex]) > -1) {
                            randIndex = this.getRandomInt(this.shoulderItems.length);
                        }
                        this.Array_Items[i] = this.shoulderItems[randIndex];
                    }
                    return this.Array_Items;
                case "abdomen":
                    for (i = 0; i < e; i++) {
                        randIndex = this.getRandomInt(this.abdomenItems.length);
                        while (this.Array_Items.indexOf(this.abdomenItems[randIndex]) > -1) {
                            randIndex = this.getRandomInt(this.abdomenItems.length);
                        }
                        this.Array_Items[i] = this.abdomenItems[randIndex];
                    }
                    return this.Array_Items;
                default:
                    return this.Array_Items;
            }
        } else {
            return this.Array_Items;
        }

    }
    setDescription(item) {
        switch (item) {
            //All the back exercises
            case "Deadlifts":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Lat Pulldowns":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Rows":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Dumbbell Rows":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Rowing Maching":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Pull-Ups":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Chin-Ups":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Rack-Pulls":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Standing Cable Reverse Fly":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            //All the bicep exercises
            case "Dumbbell Curls":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Barbell Curls":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Preacher Curls":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Hammer Curls":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            case "Cable Curls":
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
            //All the chest exercises
            //All the tricep exercises
            //All the legs exercises
            //All the shoulder exercises
            //All the ab exercises
            default:
                this.description = <Text style={styles.modalHeading}>Description</Text>;
                break;
        }
    }
    componentWillReceiveProps() {
        this.flag = this.props.navigation.state.params.flag;
    }
    render() {
        this.G = this.props.navigation.state.params.mGroup;
        this.E = this.props.navigation.state.params.exercises;
        return (
            <View style={this.state.modalVisible ? styles.transparent : styles.container}>
                <ScrollView>
                    <Text style={styles.heading}>Tap an exercise to see the description</Text>
                    {
                        this.populateArray(this.G, this.E).map((item, key) =>
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
                <Modal
                    animationType={"slide"}
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
                                    onPress={() => { this.toggleModal(!this.state.modalVisible), this.description = <Text></Text> }}
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