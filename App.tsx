import { View } from 'react-native';
import { styled } from 'styled-components/native';
import AppNavigator from './view/screens/app-navigator';
import { ColorScheme } from './view/theme/theme';

const AppContainer = styled.View<{ $background: string; }>`
  flex: 1;
  backgroundColor: ${props => props.$background}
`

export default function App() {
  return (
    <AppContainer $background={ColorScheme.background}>
      <AppNavigator />
    </AppContainer>
  )
}
