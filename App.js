import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/Sign-up';
import SignIn from './screens/Sign-in';
import SplashScreen from "./screens/SplashScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="Splash" options={{headerShown: false}} component={SplashScreen} />
      <Stack.Screen name="Sign-up" options={{headerShown: false}} component={SignUp} />
      <Stack.Screen name="Sign-in" options={{headerShown: false}} component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
