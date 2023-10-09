import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types"
import { FlatList, View } from "react-native"
import styled from "styled-components/native"
import { RootStackParamList } from "../../screens/app-navigator"
import { ColorScheme } from "../../theme/theme"
import AnimeCard from "../AnimeCard"
import Spacer from "../shared/spacer"


type SuccessListProps = {
  title: string,
  list: Anime[],
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${ColorScheme.onBackground}
`

export default function SuccessList({ title, list, navigation }: SuccessListProps) {
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
