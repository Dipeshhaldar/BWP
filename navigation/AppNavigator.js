import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import VerificationScreen from '../screens/VerificationScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CertificateScreen from '../screens/CertificateScreen';
import AadhaarScreen from '../screens/AadhaarScreen';
import Homepage from '../screens/Homepage';
import Donation from '../screens/Donation';
import ContactScreen from '../screens/ContactScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Verify" component={VerificationScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Certificate" component={CertificateScreen} />
      <Stack.Screen name="Aadhaar" component={AadhaarScreen} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Donation" component={Donation} />
      <Stack.Screen name="Contact" component={ContactScreen} />             
    </Stack.Navigator>
  );
};

export default AppNavigator;
