import DiscoverScreen from '../../view/screens/Discover'
import DetailsScreen from './Details';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar'
import { ColorScheme } from '../theme/theme';

export type RootStackParamList = {
  Discover: undefined,
  Details: { id: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: ColorScheme.background
  }
}

export default function AppNavigator() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator
        initialRouteName='Discover'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Discover'
          component={DiscoverScreen}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
