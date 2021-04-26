import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div
  `
  margin: 15px;
  width: 250px;
  height: fit-content;
  border-right: 1px solid #ddd;
  line-height: 30px;
`

export const Option = styled.div
  `
  margin: 15px 0;
  line-height: 25px;
`
export const Link = styled(RouterLink)
  `
  color: ${({ active }) => active ? '#C7511F' : '#0F1111'};
  transition: .1s;

  &:hover {
    color: #C7511F;
  }
`

export const Subtitle = styled.h4
  `

`

export const List = styled.ul
  `
  padding: 0;
  margin: 0;
`
export const ListItem = styled.li
  `
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  paddign: 0;

`

