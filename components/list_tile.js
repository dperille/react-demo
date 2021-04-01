import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/global_styles';

/* If we were using a function instead, it'd be "export function ListTile() {" */
export class ListTile extends React.Component {

  constructor(props){
    /* Set up this component */
  }

  /* This function generates a new color and sets the state color field. */
  setNewColor() {
    /* Randomize the background color */
  }

  /* The render method specifies what this component should look like. */
  render() {
    return (
      /* Specify how the tile should look & what it should do */
      <Text>I'm a tile</Text>
    )
  }

}

/* This handles all the styling for the component in this file */
const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    aspectRatio: 4,
    backgroundColor: globalStyles.colors.white,
    alignItems: 'center',       /* center the text horizontally */
    justifyContent: 'center',   /* center the text vertically */
    borderRadius: 10,
    marginBottom: 10,   /* this will create space between the tiles */
  },

  text: {
    fontSize: 20,
    fontFamily: globalStyles.font.normal,
    color: globalStyles.colors.black,
  },

});
