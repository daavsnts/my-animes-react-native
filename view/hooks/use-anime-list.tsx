import { useCallback, useState, useEffect } from "react"
import AnimesApiService from "../../data/network/animes-api-service"
import { ErrorState, LoadingState, ScreenUiState, SuccessState } from "../screens/Utils/screen-ui-state"

type useAnimeListProps = {
  type: string
}

export default function useAnimeList({ type }: useAnimeListProps) {
  const [animeListUiState, setAnimeListUiState] = useState<ScreenUiState<Anime[]>>(new LoadingState())

  const getAnimeList = useCallback(async function(type: string) {
    try {
      const { fetchAnimeList } = AnimesApiService()
      const animeList = await fetchAnimeList(type)
      setAnimeListUiState(new SuccessState(animeList))
    } catch (error: any) {
      const errorMessage = error.message as string
      setAnimeListUiState(new ErrorState(errorMessage))
    }
  }, [])

  useEffect(() => {
    getAnimeList(type)
  }, [getAnimeList])

  return {
    animeListUiState
  }
}
