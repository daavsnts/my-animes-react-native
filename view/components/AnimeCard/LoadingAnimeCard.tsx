import { AppColors, ColorScheme } from '../../theme/theme'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'

const Card = styled.Pressable`
  background-color: ${ColorScheme.surface};
  width: 170px;
  height: 230px;
  border-radius: 15px;
`

export default function LoadingAnimeCard() {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
  const { myBlack, myDarkGrey } = AppColors

  return (
    <Card>
      <ShimmerPlaceholder
        style={styles.shimmer}
        shimmerColors={[myBlack, myDarkGrey, myBlack]}
        shimmerStyle={{ borderRadius: 15, angle: 120 }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  shimmer: {
    height: '100%',
    width: '100%',
    borderRadius: 15
  }
})
