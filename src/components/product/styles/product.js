import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

export const Container = styled.div
`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 height: 100%;

 & > :last-child {
   text-align: center;
 }
`
export const Group = styled.div
`
  margin: 5px;
`

export const Info = styled.div 
`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1
`
  font-size: 17px;
  min-width: 150px;
`

export const Text = styled.p
`
  
`

export const SmallText = styled.p
`
  color: #007600 !important;
  font-size: 12px;
`

export const Image = styled.img
`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
`

export const Price = styled.p
`
  margin-top: 5px;
`

export const ListItem = styled.li 
`

`

export const Delete = styled.button
`
  color: #007185;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`
export const Link = styled(RouterLink)
`
  color: #007185;
  transition: .2s;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;

  &:hover {
    color: #C7511F;
    text-decoration: underline;
  }

  &:visited {
    color: #007185;
  }
`


export const Button = styled.button
`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
  background: rgb(238,209,135);
  background: linear-gradient(180deg, rgba(238,209,135,1) 43%, rgba(240,193,75,1) 92%); 
  border-radius: 2px;
  height: 30px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  box-shadow: 0 1px 0 rgba(255,255,255,.4) inset;
  outline: none;

  &:hover {
    filter: contrast(.9);
  }

  &.secondary {
    margin-top: 0;
    display: flex;
    align-items: center;
    height: 30px;
    font-weight: 500;
    border-color: lightgray;
    border-radius: 7px;
    font-size: 13px;
    background: #F0F2F2;
    box-shadow: 0 2px 5px rgba(15, 17,17, .15);
    min-width: 77px;
  }
`
