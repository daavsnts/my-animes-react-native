import InfoContainer from "./InfoContainer"
import styled from 'styled-components/native'
import { ColorScheme } from '../../theme/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../app-navigator"

const ScreenBackground = styled.View`
  flex: 1;
  background-color: ${ColorScheme.background};
  align-items: center;
  justify-content: center;
`

const Container = styled.View`
  width: 100%;
  height: 100%;
  gap: 10px;
`

const Poster = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`
const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0, 0, 0, 0.8)', 'black']
})`
  width: 100%;
  height: 100%;
  position: absolute;
`

const BackButton = styled.Pressable`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 50px;
  margin-left: 20px;
  border-radius: 15px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

type DetailsContainerProps = {
  data: Anime
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function DetailsContainer({ data, navigation }: DetailsContainerProps) {
  const { coverImage: { extraLarge: coverUri } } = data
  return (
    <ScreenBackground>
      <Container>
        <Poster source={{ uri: coverUri }} />
        <Gradient />
        <BackButton onPress={() => { navigation.goBack() }}>
          <Ionicons name='arrow-back' size={24} color={ColorScheme.onSurface} />
        </BackButton>
        <InfoContainer data={data} />
      </Container>
    </ScreenBackground>
  )
}
