import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ListTile } from '../components/list_tile.js';
import globalStyles from '../styles/global_styles';

export default class HomeScreen extends React.Component {

  constructor(props) {
    /* Set up the component */
  }

  /* This function will add a new tile to the list of tiles */
  addNewTile() {
    /* Update the state to add a new number tile */
  }

  render() {

    /* Create a tile for each number in the array */

    return (
      /* Specify the components in the home screen & how they should look */
      <Text>Home Screen!</Text>
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
