import { styled } from "styled-components/native"
import { ScrollView } from "react-native"
import { ColorScheme } from "../../theme/theme"
import { useState } from "react"

type DescriptionContainerProps = {
  text: string
}

const Container = styled.View`
  width: 100%;
  height: 250px;
`

const DescriptionText = styled.Text`
  font-size: 18px;
  color: ${ColorScheme.onBackground}
`

export default function DescriptionContainer({ text }: DescriptionContainerProps) {
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
    <Container>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <DescriptionText onPress={truncateText}>{descText}</DescriptionText>
      </ScrollView>
    </Container>
  )
}
