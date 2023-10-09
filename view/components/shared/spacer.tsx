import styled from 'styled-components/native'

type SpacerProps = {
  h?: string;
  w?: string;
}

const SpacerStyled = styled.View<{ $h?: string, $w?: string; }>`
height: ${props => props.$h ? props.$h : '0px'};
width: ${props => props.$w ? props.$w : '0px'};
`

export default function Spacer({ h, w }: SpacerProps) {
  return (
    <SpacerStyled $h={h} $w={w} />
  )
}
