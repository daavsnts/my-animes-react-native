import { useCallback, useState, useEffect } from "react"
import AnimesApiService from "../../data/network/animes-api-service"
import { ErrorState, LoadingState, ScreenUiState, SuccessState } from "../screens/Utils/screen-ui-state"

type useAnimeDetailsProps = {
  id: string
}

export default function useAnimeDetails({ id }: useAnimeDetailsProps) {
  const [animeDetailsUiState, setAnimeDetailsUiState] = useState<ScreenUiState<Anime>>(new LoadingState())

  const getAnimeDetails = useCallback(async function(id: string) {
    try {
      const { fetchAnimeDetails } = AnimesApiService()
      const animeDetails = await fetchAnimeDetails(id)
      setAnimeDetailsUiState(new SuccessState(animeDetails))
    } catch (error: any) {
      const errorMessage = error.message as string
      setAnimeDetailsUiState(new ErrorState(errorMessage))
    }
  }, [])

  useEffect(() => {
    getAnimeDetails(id)
  }, [getAnimeDetails])

  return {
    animeDetailsUiState
  }
}
