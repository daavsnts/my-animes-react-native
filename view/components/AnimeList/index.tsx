import { FlatList, View } from 'react-native';
import { ColorScheme } from '../../theme/theme'
import styled from 'styled-components/native'
import AnimeCard from '../AnimeCard';
import Spacer from '../shared/spacer';
import { ErrorState, LoadingState, ScreenUiState, SuccessState } from '../../screens/Utils/screen-ui-state';
import { RootStackParamList } from '../../screens/app-navigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AnimeListProps = {
  title: string;
  animeListUiState: ScreenUiState<Anime[]>
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function AnimeList({ title, animeListUiState, navigation }: AnimeListProps) {
  if (animeListUiState instanceof ErrorState) {

  } else if (animeListUiState instanceof LoadingState) {

  } else if (animeListUiState instanceof SuccessState) {
    return <RenderAnimeList title={title} list={animeListUiState.data} navigation={navigation} />
  }
  return null
}

type RenderListProps = {
  title: string,
  list: Anime[],
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${ColorScheme.onBackground}
`

function RenderAnimeList({ title, list, navigation }: RenderListProps) {
  return (
    <View>
      <HeaderText>{title}</HeaderText>
      <Spacer h='10px' />
      <FlatList
        data={list}
        horizontal
        renderItem={({ item }) => <AnimeCard anime={item} navigation={navigation} />}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

