import React, { useState, useEffect } from 'react';
import { TestTile } from '../components/test_tile.js';
import { View, Button } from 'react-native';

// for this, you'll have to run 'npm install react-native-uuid' on the command line
import uuid from 'react-native-uuid';

export default function TestScreen() {

  // Here, I'm just creating some hard-coded data - a list of objects
  // (for you, this is where you'd list the apartments - eg. [{name: "21 Pearl", rent: $800, ...}, etc.])
  // (also, don't worry about the "key" part - I can explain why we need that later if you want, but it's not too important for now)
  const list = [
    {val1: 0, key: uuid.v4()},
    {val1: 9, key: uuid.v4()},
    {val1: 4, key: uuid.v4()},
  ];
  const [listOfTiles, setListOfTiles] = useState(list);

  // This function sorts the three objects I created above by their "val1" field
  const sortByVal1 = () => {
    // Here we specify how to sort them - similar to the Java compareTo method
    listOfTiles.sort((a,b) => (a.val1 > b.val1) ? -1 : 1);

    // This part is a little weird, but basically this line creates a copy of the array we just sorted
    // Because React will only re-render if the whole array changes, not just elements within the array (don't worry about this if it doesn't make sense)
    setListOfTiles([...listOfTiles]);
  }

  return (
    <View>
      <Button onPress={sortByVal1}/>

      { 
        // For each object in the list we created...
        listOfTiles.map( (object) => {
          // Create a TestTile component on the screen, passing in its value
          return <TestTile key={object.key} val1={object.val1}></TestTile>
        }) 
      }

    </View>
  )
}