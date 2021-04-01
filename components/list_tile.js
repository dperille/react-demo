import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/global_styles';

/* If we were using a function instead, it'd be "export function ListTile() {" */
export class ListTile extends React.Component {

  /* Props are things passed (think parameters) to this component.
     In this case, the value of the text is going to be passed as a prop. 
     
     ** If we were using a "function" instead of a "class" for this component,
        we'd have to use hooks to track state ** 
  */
  constructor(props){
    /* super(props) is needed for class components */
    super(props);

    /* State tracks information about this component. In this case, we'll
       track the text value (saving it from props to state) and the current
       color of this tile */
    this.state = {
      text: props.message,
      color: globalStyles.colors.white,
    };
  }

  /* This function generates a new color and sets the state color field. */
  setNewColor() {
    let newColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    
    /* setState will automatically cause this component to re-render. That means
       the background color is going to automatically change without any extra effort. */
    this.setState({
      color: newColor,
    });
  }

  /* The render method specifies what this component should look like. */
  render() {
    return (
      /* TouchableOpacity is the wrapper -- it holds the text & handles when the tile is pressed. */
      /* View is another wrapper, which allows us to access this components color value, since we can't access state in "styles" below */
      <TouchableOpacity style={styles.container} onPress={() => this.setNewColor()} activeOpacity={0.9}>
        
        <View style={{ backgroundColor: this.state.color,
                       width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>

          <Text style={styles.text}>{this.state.text}</Text>

        </View>
      </TouchableOpacity>
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
