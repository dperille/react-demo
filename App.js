import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home_screen.js';
import ProfileScreen from './screens/profile_screen.js';
import TestScreen from './screens/test_screen.js';


/* To install the stack navigator packages:
   npm install @react-navigation/native
   npm install @react-navigation-stack
   expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
*/
const Stack = createStackNavigator();

export default function App() {
  return (
    /* The first Screen you put under <Stack.Navigator> will be the 
       default screen when the app opens */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Test" component={TestScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
