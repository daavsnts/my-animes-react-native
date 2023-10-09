import { ErrorState, LoadingState, ScreenUiState, SuccessState } from '../../screens/Utils/screen-ui-state';
import { RootStackParamList } from '../../screens/app-navigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SuccessList from './SuccessList';
import LoadingList from './LoadingList';

type AnimeListProps = {
  title: string;
  animeListUiState: ScreenUiState<Anime[]>
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function AnimeList({ title, animeListUiState, navigation }: AnimeListProps) {
  if (animeListUiState instanceof ErrorState) {

  } else if (animeListUiState instanceof LoadingState) {
    return (<LoadingList title={title} />)
  } else if (animeListUiState instanceof SuccessState) {
    return (
      <SuccessList
        title={title}
        list={animeListUiState.data}
        navigation={navigation}
      />
    )
  }
  return null
}

