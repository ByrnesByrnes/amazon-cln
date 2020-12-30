import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.section 
`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
  min-width: 670px;
`

export const Logo = styled.img
`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`

export const Search = styled.div
`
 display: flex;
 flex: 1;
 align-items: center;
 border-radius: 24px;

 & input {
  font-size: 16px;
  padding: 10px;
  border: none;
  height: 40px;
  width: 100%;
  border-radius: 4px 0 0 4px;
  outline: none; !//soemthing here
 }

 & svg {
   padding: 8px;
   height: 40px;
   width: 40px;
   background-color: #febd69;
   cursor: pointer;
   border-radius:0 4px 4px 0;

   &:hover {
     filter: contrast(.9);
   }
 }
`

export const Nav = styled.div
`
  display: flex;
  justify-content: space-evenly;
`

export const NavOption = styled.span
`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  color: #fff;
  font-size: 10px;

  & + & {
    font-size: 13px;
    font-weight: 800;
  }
`

export const NavLink = styled(RouterLink)
`
  margin: 5px;

  &:last-of-type {
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;

    ${NavOption} {
      margin: 0;
    }
  }
`