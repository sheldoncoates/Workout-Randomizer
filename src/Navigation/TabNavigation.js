import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../Screens/HomeScreen';
import Exercises from '../Screens/ExercisesScreen';
import Interval from '../Screens/IntervalScreen';
import Descriptions from '../Screens/DescriptionsScreen';
import AllExercises from '../Screens/AllExercisesScreen';

const stackNavigator = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{
                fontSize: 22,
                fontWeight: '700',
                color: '#000',
            }}>Workout Randomizer</Text>,
            headerMode: 'float',
        })
    },
    Exercises:{
        screen: Exercises,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{
                fontSize: 22,
                fontWeight: '700',
                color: '#000',
            }}>Exercise</Text>,
            headerMode: 'float',
        })
    },
    Interval:{
        screen: Interval,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{
                fontSize: 22,
                fontWeight: '700',
                color: '#000',
            }}>Interval</Text>,
            headerMode: 'float',
        })
    },
    Descriptions:{
        screen: Descriptions,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{
                fontSize: 22,
                fontWeight: '700',
                color: '#000',
            }}>Description</Text>,
            headerMode: 'float',
        })
    },
    AllExercises:{
        screen: AllExercises,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{
                fontSize: 22,
                fontWeight: '700',
                color: '#000',
            }}>All Exercises</Text>,
            headerMode: 'float',
        })
    },
})
export default createAppContainer(stackNavigator);