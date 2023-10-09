import useAnimeDetails from '../../hooks/use-anime-details'
import { SuccessState, ErrorState, LoadingState } from '../Utils/screen-ui-state'
import { RootStackParamList } from '../app-navigator'
import { RouteProp } from '@react-navigation/native'
import DetailsContainer from './DetailsContainer'

type DetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'Details'>
}

export default function DetailsScreen({ route: { params: { id } } }: DetailsScreenProps) {
  const { animeDetailsUiState } = useAnimeDetails({ id: id })

  if (animeDetailsUiState instanceof ErrorState) {

  } else if (animeDetailsUiState instanceof LoadingState) {

  } else if (animeDetailsUiState instanceof SuccessState) {
    return <DetailsContainer data={animeDetailsUiState.data} />
  }
  return null
}
