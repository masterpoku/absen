import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './page/Splash';
import Login from './page/Login';
import Home from './page/Home';
import ScanQRScreen from './page/ScanQr';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="ScanQr" component={ScanQRScreen} options={{ title: 'Scan Barcode' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
