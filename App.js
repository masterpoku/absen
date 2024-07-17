import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Splash from './page/Splash';
import Login from './page/Login';
import Home from './page/Home';
import ScanQRScreen from './page/ScanQr';

// Stack Navigator
const Stack = createStackNavigator();

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Define the Bottom Tab Navigator component
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Sorogan') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          } else if (route.name === 'AL-Qura`an') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          } else if (route.name === 'Lalaran') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />
      <Tab.Screen name="Sorogan">
        {props => <ScanQRScreen {...props} origin="Sorogan" />}
      </Tab.Screen>
      <Tab.Screen name="AL-Qura`an">
        {props => <ScanQRScreen {...props} origin="Madrasah" />}
      </Tab.Screen>
      <Tab.Screen name="Lalaran">
        {props => <ScanQRScreen {...props} origin="Lalaran" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

// Main App component with Stack Navigator
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ title: 'Home', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
