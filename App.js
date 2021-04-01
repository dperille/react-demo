import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home_screen.js';
import ProfileScreen from './screens/profile_screen.js';


/* npm install @react-navigation/native
   npm install @react-navigation-stack
   expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
*/
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
