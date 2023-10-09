import DiscoverScreen from '../../view/screens/Discover'
import DetailsScreen from './Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorScheme } from '../theme/theme'
import { StatusBar } from 'expo-status-bar'

export type RootStackParamList = {
  Discover: undefined,
  Details: { id: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Discover'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Discover' component={DiscoverScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
