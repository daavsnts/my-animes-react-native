import InfoContainer from "./InfoContainer"
import styled from 'styled-components/native'
import { ColorScheme } from '../../theme/theme'
import { LinearGradient } from 'expo-linear-gradient'

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

type DetailsContainerProps = {
  data: Anime
}

export default function DetailsContainer({ data }: DetailsContainerProps) {
  const { coverImage: { extraLarge: coverUri } } = data
  return (
    <ScreenBackground>
      <Container>
        <Poster source={{ uri: coverUri }} />
        <Gradient />
        <InfoContainer data={data} />
      </Container>
    </ScreenBackground>
  )
}
