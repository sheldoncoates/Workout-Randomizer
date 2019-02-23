import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Modal, TouchableOpacity, Image, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';

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
        mGroup: "",
        exercises: "",
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
        if (item == "done") {
            this.description = <View style={styles.container}>
                <Text style={styles.modalHeading}>Are you sure you are done your workout?</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Workout'),
                        this.Array_Items = [""],
                        this.toggleGroup(""),
                        this.toggleModal(!this.state.modalVisible),
                        this.description = <Text></Text>
                }} style={{ paddingBottom: 20, paddingTop: 10 }}>
                    <View style={styles.DunButton}>
                        <Text style={styles.DoneButtonText}>Done</Text>
                    </View>
                </TouchableOpacity>
            </View>
        }
        if(this.G == "back"){

        }
        if (this.G == "biceps") {
            if (item == "Dumbbell Curls") {
                this.description = <Text style={styles.modalHeading}>This is the dumbbell curls description</Text>;
            } else if (item == "Barbell Curls") {
                this.description = <Text style={styles.modalHeading}>This is the Barbell curls description</Text>;
            }
            else if (item == "Preacher Curls") {
                this.description = <Text style={styles.modalHeading}>This is the Preacher curls description</Text>;
            }
        }
        if(this.G == "chest"){
            
        }
        if(this.G == "triceps"){
            
        }
        if(this.G == "legs"){
            
        }
        if(this.G == "shoulder"){
            
        }
        if(this.G == "abdomen"){
            
        }
    }
    toggleGroup(g) {
        this.setState({ mGroup: g });
    }
    componentWillReceiveProps() {
        this.flag = this.props.navigation.state.params.flag;
    }
    render() {
        this.G = this.props.navigation.state.params.mGroup;
        this.E = this.props.navigation.state.params.exercises;
        return (
            <View style={styles.container}>
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
                    <TouchableOpacity onPress={() => {
                        this.toggleModal(true), this.setDescription("done")
                    }} style={styles.doneButtonContainer}>
                        <View style={styles.DoneButton}>
                            <Text style={styles.DoneButtonText}>Done</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
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