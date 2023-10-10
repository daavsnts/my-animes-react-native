import { FlatList, View } from "react-native"
import styled from "styled-components/native"
import { ColorScheme } from "../../theme/theme"
import ErrorAnimeCard from "../AnimeCard/ErrorAnimeCard"
import Spacer from "../shared/spacer"

const ErrorHeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${ColorScheme.onBackground}
`
type ErrorListProps = {
  title: string
}

export default function ErrorList({ title }: ErrorListProps) {
  const loadingFakeList = [1, 2]
  return (
    <View>
      <ErrorHeaderText>{title}</ErrorHeaderText>
      <Spacer h='10px' />
      <FlatList
        data={loadingFakeList}
        horizontal
        renderItem={({ item }) => <ErrorAnimeCard />}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
