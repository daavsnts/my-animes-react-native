import { FlatList, View } from "react-native"
import styled from "styled-components/native"
import { ColorScheme } from "../../theme/theme"
import LoadingAnimeCard from "../AnimeCard/LoadingAnimeCard"
import Spacer from "../shared/spacer"

const LoadingHeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${ColorScheme.onBackground}
`
type LoadingListProps = {
  title: string
}

export default function LoadingList({ title }: LoadingListProps) {
  const loadingFakeList = [1, 2]
  return (
    <View>
      <LoadingHeaderText>{title}</LoadingHeaderText>
      <Spacer h='10px' />
      <FlatList
        data={loadingFakeList}
        horizontal
        renderItem={({ item }) => <LoadingAnimeCard />}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
