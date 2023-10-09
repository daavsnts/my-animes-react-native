import useAnimeDetails from '../../hooks/use-anime-details'
import { SuccessState, ErrorState, LoadingState } from '../Utils/screen-ui-state'
import { RootStackParamList } from '../app-navigator'
import { RouteProp } from '@react-navigation/native'
import DetailsContainer from './DetailsContainer'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'Details'>
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function DetailsScreen({ route: { params: { id } }, navigation }: DetailsScreenProps) {
  const { animeDetailsUiState } = useAnimeDetails({ id: id })

  if (animeDetailsUiState instanceof ErrorState) {

  } else if (animeDetailsUiState instanceof LoadingState) {

  } else if (animeDetailsUiState instanceof SuccessState) {
    return <DetailsContainer navigation={navigation} data={animeDetailsUiState.data} />
  }
  return null
}
