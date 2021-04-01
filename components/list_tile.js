import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/global_styles';

export class ListTile extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      text: props.message,
      color: globalStyles.colors.white,
    };
  }

  setNewColor() {
    let newColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({
      color: newColor,
    });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.setNewColor()} activeOpacity={0.9}>
        <View style={{ backgroundColor: this.state.color,
                       width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>

          <Text style={styles.text}>{this.state.text}</Text>

        </View>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    aspectRatio: 4,
    backgroundColor: globalStyles.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },

  text: {
    fontSize: 20,
    fontFamily: globalStyles.font.normal,
    color: globalStyles.colors.black,
  },

});
