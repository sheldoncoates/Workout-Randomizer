import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import styles from '../Styles/AllExercisesScreenStyle';
import { SearchBar } from 'react-native-elements';
import { BackData } from '../Data/BackData.js';
import { BicepData } from '../Data/BicepData.js';
import { ChestData } from '../Data/ChestData.js';
import { TricepData } from '../Data/TricepData.js';
import { LegData } from '../Data/LegData.js';
import { ShoulderData } from '../Data/ShoulderData.js';
import { AbdomenData } from '../Data/AbdomenData.js';

export default class AllExercisesScreen extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true,dataSource: [], search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
    this.arrayholder = [...BackData, ...BicepData, ...ChestData, ...TricepData, ...LegData, ...ShoulderData, ...AbdomenData];
    this.state.dataSource = this.arrayholder;
    this.setState({
      isLoading: false
    });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.Name ? item.Name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  };
  render() {  
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.viewStyle}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          value={this.state.search}
          lightTheme={true}
        />
        <FlatList
          data={this.state.dataSource}
          // ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <Text style={styles.textStyle}>{item.Name}</Text>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    padding: 10,
  },
});