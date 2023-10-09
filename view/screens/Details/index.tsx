import styled from 'styled-components/native'
import Spacer from '../../components/shared/spacer'
import { ScrollView, Text, View } from 'react-native'
import { ColorScheme, AppColors } from '../../theme/theme'
import useAnimeDetails from '../../hooks/use-anime-details'
import { SuccessState, ErrorState, LoadingState } from '../Utils/screen-ui-state'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import { RootStackParamList } from '../app-navigator'
import { RouteProp } from '@react-navigation/native'

type DetailsProps = {
  route: RouteProp<RootStackParamList, 'Details'>
}

export default function Details({ route: { params: { id } } }: DetailsProps) {
  const { animeDetailsUiState } = useAnimeDetails({ id: id })

  if (animeDetailsUiState instanceof ErrorState) {

  } else if (animeDetailsUiState instanceof LoadingState) {

  } else if (animeDetailsUiState instanceof SuccessState) {
    return <RenderAnimeDetails data={animeDetailsUiState.data} />
  }
  return null
}

type RenderAnimeDetailsProps = {
  data: Anime
}

function RenderAnimeDetails({ data }: RenderAnimeDetailsProps) {
  const { coverImage: { extraLarge: coverUri } } = data
  return (
    <ScreenBackground>
      <Container>
        <Poster source={{ uri: coverUri }} />
        <Gradient />
        <InfoBox data={data} />
      </Container>
    </ScreenBackground>
  )
}

type InfoBoxProps = {
  data: Anime
}

function InfoBox({ data }: InfoBoxProps) {
  const {
    title: { english: title },
    startDate: { day, month, year },
    description
  } = data
  const releaseDate = `${(month < 10) ? '0' + month : month}/${(day < 10) ? '0' + day : day}/${year}`

  return (
    <InfoBoxContainer>
      <Title>{title}</Title>
      <ReleaseDate>{releaseDate}</ReleaseDate>
      <Spacer h='20px' />
      <Description text={description} />
    </InfoBoxContainer>
  )
}

type DescriptionProps = {
  text: string
}

function Description({ text }: DescriptionProps) {
  const cleanedText = text.replace(/<[^>]*>/g, '')
  const truncatedText = `${cleanedText.slice(0, 380)}...`
  const [descText, setDescText] = useState(truncatedText)
  const [truncated, setTruncated] = useState(true)

  const truncateText = () => {
    if (truncated) {
      setDescText(cleanedText)
      setTruncated(false)
    } else {
      setDescText(truncatedText)
      setTruncated(true)
    }
  }

  return (
    <DescriptionContainer>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <DescriptionText onPress={truncateText}>{descText}</DescriptionText>
      </ScrollView>
    </DescriptionContainer>
  )
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

const InfoBoxContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 100px;
  flex-direciton: column;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${ColorScheme.onBackground}
`

const ReleaseDate = styled.Text`
  font-size: 18px;
  color: ${AppColors.myLightGray};
  font-weight: bold;
`

const DescriptionContainer = styled.View`
  width: 100%;
  height: 250px;
`

const DescriptionText = styled.Text`
  font-size: 18px;
  color: ${ColorScheme.onBackground}
`
