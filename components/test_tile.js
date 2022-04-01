import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function TestTile(props) {

  // Use the value passed in (ie. in test_screen where we say val1={object.val1}) as the initial value
  const [val1, setVal1] = useState(props.val1);

  // We're just displaying a simple box with its value
  return (
    <View style={styles.container}>
      <Text>{val1}</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: 'grey',
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  }

})