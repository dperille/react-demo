import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ListTile } from '../components/list_tile.js';
import globalStyles from '../styles/global_styles';

export default class HomeScreen extends React.Component {

  /* See list_tile.js for more on props & state. */
  constructor(props) {
    super(props);

    this.state = {
      msgs: [],
      count: 0,
    };
  }

  /* This function will add a new tile to the list of tiles */
  addNewTile() {

    /* Append the next number onto the end of the array. 
       setState will cause a re-render, but only of the components that have changed (ie. just
        the new component we added) */
    this.setState({
      msgs: [...this.state.msgs, this.state.count],
      count: this.state.count + 1,
    });
  }

  render() {

    /* For each number in the array, create a tile for it */
    let components_list = this.state.msgs.map( (text, index) => {
      return (
        /* We're passing "text" as a prop to the ListTile component */
        <ListTile key={index} message={text}/>
      )
    })

    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}

          /* When the button is pressed, call the addNewTile() function */
          onPress={() => this.addNewTile()}
        >
          <Text style={styles.text}>Add an item!</Text> 
          
        </TouchableOpacity>

        <ScrollView style={styles.scroll}>
          {components_list}
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,        /* Padding specifies how much space to keep from INSIDE of this component */
    paddingTop: 50,
    backgroundColor: globalStyles.colors.primary,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '10%',
    borderRadius: 30,
    backgroundColor: globalStyles.colors.secondary,
    marginBottom: '3%',   /* Margin specifies how much space to keep from OUTSIDE this component */
  },

  text: {
    fontFamily: globalStyles.font.bold,
    fontSize: 20,
    color: globalStyles.colors.black,
  },

  scroll: {
    flex: 1,
    width: '100%',
    padding: 8,
    backgroundColor: globalStyles.colors.tertiary,
  }

});
