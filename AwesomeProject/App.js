import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import Login2 from './src/Login2';
import Login3 from './src/Login3';
import Login4 from './src/Login4';
import HookEffect from './src/screens/HookEffect';
import Data from './src/screens/Data';
import home from './src/screens/home';
import ReviewDetails from './src/screens/reviewDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="Login3" component={Login3} />
        <Stack.Screen name="Login4" component={Login4} />
        <Stack.Screen name="HookEffect" component={HookEffect} />
        <Stack.Screen name="data" component={Data} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="details" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;