import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div
  `
  margin: 15px;
  width: 250px;
  height: 100vh;
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
  color: #0F1111;
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

export const Input = styled.input
  `
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

`

export const CheckMark = styled.span
  `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2.5px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
`

export const Label = styled.span
  `
  margin-left: 25px;
  cursor: pointer;
  transition: .2s;
  &:hover  {
    color: #C7511F;

    & ~ ${Input} ~ ${CheckMark} {
      background: lightgrey;
    }
  }
  
  & ~ ${Input}:checked ~ ${CheckMark} {
    background: #007185;
  }

  & ~ ${Input}:checked ~ ${CheckMark}:after {
    display: block;
  }

  
`