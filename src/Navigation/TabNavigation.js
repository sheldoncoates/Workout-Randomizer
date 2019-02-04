import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
import Workout from '../screens/WorkoutScreen';
import Interval from '../screens/IntervalScreen';
import Settings from '../screens/SettingsScreen';
import DrawerComponent from '../Components/DrawerComponent';
import ExerciseScreen from '../screens/ExercisesScreen';


const HomeTabNavigation = createMaterialTopTabNavigator(
    {
        Workout: { screen: Workout },
        Interval: { screen: Interval },
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            indicatorStyle: {
                backgroundColor: '#35A7FF',
                height: 2
            },
            labelStyle: {
                fontSize: 12,
            },
            tabStyle: {
                height: 44,
                flexDirection: 'row',
                justifyContent: 'center',
            },
            style: {
                backgroundColor: 'white',
            },

        },
    },
);
const drawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeTabNavigation,
    },
    Settings: {
        screen: Settings
    },
    ExerciseScreen: {
        screen: ExerciseScreen
    }
}, {
        initialRouteName: 'Home',
        contentComponent: DrawerComponent,
    });
const stackNavigator = createStackNavigator({
    MyTab: {
        screen: drawerNavigator,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{
                fontSize: 22,
                fontWeight: '700',
                color: '#000',
            }}>Workout Randomizer</Text>,
            headerMode: 'float',
            headerLeft:
                <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                    <Image source={require('../../assets/dumbbell.png')}
                        style={{
                            width: 25, height: 25, marginLeft: 15, shadowColor: '#000',
                            shadowOpacity: 0.3,
                            shadowOffset: { width: 1, height: 1 },
                        }} />
                </TouchableOpacity>,
        })
    }
})
export default createAppContainer(stackNavigator);