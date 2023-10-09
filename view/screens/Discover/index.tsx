import styled from 'styled-components/native'
import SearchBar from '../../components/SearchBar'
import AnimeList from '../../components/AnimeList';
import Spacer from '../../components/shared/spacer';
import { ScrollView } from 'react-native';
import useAnimeList from '../../hooks/use-anime-list';
import { RootStackParamList } from '../app-navigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ColorScheme } from '../../theme/theme';

type DiscoverScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const ScreenBackground = styled.View`
  flex: 1;
  background-color: ${ColorScheme.background};
  align-items: center;
  justify-content: center;
`

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
`

export default function DiscoverScreen({ navigation }: DiscoverProps) {
  const { animeListUiState: trending } = useAnimeList({ type: 'sort: TRENDING_DESC' })
  const { animeListUiState: popularThisYear } = useAnimeList({ type: 'seasonYear: 2023, sort: POPULARITY_DESC' })
  const { animeListUiState: popularAllTime } = useAnimeList({ type: 'sort: POPULARITY_DESC' })

  return (
    <ScreenBackground>
      <Container>
        <Spacer h='30px' />
        <SearchBar />
        <Spacer h='5px' />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <AnimeList title='Trending now' animeListUiState={trending} navigation={navigation} />
          <Spacer h='20px' />
          <AnimeList title='Popular this year' animeListUiState={popularThisYear} navigation={navigation} />
          <Spacer h='20px' />
          <AnimeList title='Popular all time' animeListUiState={popularAllTime} navigation={navigation} />
          <Spacer h='20px' />
        </ScrollView>
      </Container>
    </ScreenBackground>
  );
}
