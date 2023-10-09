import { AppColors, ColorScheme } from '../../theme/theme'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from '../../screens/app-navigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AnimeCardProps = {
  anime: Anime
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0, 0, 0, 0.3)', 'black']
})`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 15px;
`

const Poster = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
`

const Card = styled.View`
  background-color: ${ColorScheme.surface};
  width: 170px;
  height: 230px;
  border-radius: 15px;
`
const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 15px;
  flex-direction: column;
  justify-content: flex-end;
`

const Title = styled.Text`
  font-size: 16px;
  color: ${ColorScheme.onBackground};
  font-weight: bold;
`

const ReleaseDate = styled.Text`
  font-size: 14px;
  color: ${AppColors.myLightGray};
  font-weight: bold;
`

export default function AnimeCard({ anime, navigation }: AnimeCardProps) {
  const {
    id,
    title: { english: title },
    coverImage: { large: coverUri },
    startDate: { day, month, year }
  } = anime
  const releaseDate = `${(month < 10) ? '0' + month : month}/${(day < 10) ? '0' + day : day}/${year}`

  return (
    <Card onTouchStart={() => { navigation.navigate('Details', { id: id.toString() }) }}>
      <Poster source={{ uri: coverUri }} />
      <Gradient />
      <Content>
        <Title>{(title && !releaseDate.includes('null')) ? title : ""}</Title>
        <ReleaseDate>{(!releaseDate.includes('null')) ? releaseDate : ""}</ReleaseDate>
      </Content>
    </Card>
  );
}

