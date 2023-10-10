import { ColorScheme } from '../../theme/theme'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

const Card = styled.Pressable`
  background-color: ${ColorScheme.surface};
  width: 170px;
  height: 230px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ErrorAnimeCard() {

  return (
    <Card>
      <MaterialIcons name="error" size={56} color={ColorScheme.error} />
    </Card>
  );
}
