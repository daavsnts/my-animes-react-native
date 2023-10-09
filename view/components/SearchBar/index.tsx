import { AppColors, ColorScheme } from '../../theme/theme'
import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'

const Container = styled.View`
  background-color: ${ColorScheme.surface};
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  overflow: hidden;
`
const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: AppColors.myDarkGrey,
  selectionColor: AppColors.myWhite
})`
  color: ${AppColors.myWhite};
  font-weight: bold;
  font-size: 16px;
  width: 85%;
`

const SearchIcon = styled.View`
  padding: 5px;
`

export default function SearchBar() {
  return (
    <Container>
      <SearchIcon>
        <FontAwesome name="search" size={16} color={ColorScheme.onBackground} />
      </SearchIcon>
      <SearchInput placeholder="Search..." />
    </Container>
  );
}
