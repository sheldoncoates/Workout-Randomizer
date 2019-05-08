import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from '../Styles/AllExercisesScreenStyle';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

//****** Folllow this tutoiral for search */ https://aboutreact.com/searching-in-list-using-search-bar/
export default class AllExercisesScreen extends Component {
    constructor(props) {
        super(props);
        //setting default state
        this.state = { isLoading: true, search: '' };
        this.arrayholder = [];
    }
    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(responseJson => {
            this.setState(
              {
                isLoading: false,
                dataSource: responseJson,
              },
              function() {
                this.arrayholder = responseJson;
              }
            );
          })
          .catch(error => {
            console.error(error);
          });
      }
    updateSearch = search => {
        this.setState({ search });
    };
    render() {

        const { search } = this.state;

        return (
            <ScrollView>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme={true}
                />
                <Text>This doesn't work currently, just go back</Text>
            </ScrollView>
        );
    }
}