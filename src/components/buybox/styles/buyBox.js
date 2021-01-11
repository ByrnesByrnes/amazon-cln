import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div
`
  display: flex:
  flex-direction: column;
  margin-left: 20px;
  width: 270px;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 20px;
  height: fit-content;
`

export const Button = styled.button
`
  display: flex;
  align-items: center;
  padding: 0 2px;
  width: 100%;
  cursor: pointer;
  background: rgb(255,178,120);
  background: linear-gradient(180deg, rgba(255,178,120,1) 0%, rgba(237,146,32,1) 100%); 
  border-radius: 2px;
  height: 30px;
  border: 1px solid;
  border-color: #ca7c1b #be751a #a56616;
  margin-top: 10px;
  color: #111;
  box-shadow: 0 1px 0 rgba(255,255,255,.4) inset;
  transition: .1s ease-in-out;
  outline: none;

  &:hover {
    filter: contrast(.9);
  }

  & > svg {
    border: 1px solid #000;
    border-radius: 4px;
    background: #333333;
    padding: 2px;
    fill: #fff;
  }
  & > span {
    width: 100%;
    text-align: center;
  }

`

export const AddWish = styled(Button)
`
  padding-left: 10px;
  text-align: left;
  border-color:  darkgray;
  background: rgb(240,240,240);
  background: linear-gradient(180deg, rgba(240,240,240,1) 30%, rgba(220,220,220,1) 100%);
`

export const Text = styled.p
`
  color: #007600 !important;
  font-weight: 500;
`
export const TextSmall = styled.p
`
  margin: 0 2px 10px;
  font-size: 14px;
  line-height: 20px; 
`

export const Bold = styled.span
`
  font-weight: 700;
`

export const Link = styled(RouterLink)
`
  color: #007185;
  &:Hover {
    text-decoration: underline;
    color: #C7511F;
  }

  &  svg {
    font-size: 18px;
    margin-right: 5px;
    fill: #999999;
  }
`

export const Price = styled.p 
`
  color: #B12704 !important;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`

export const Group = styled.div 
`

`

export const Secure = styled.div
`
  margin: 10px 0;

  ${TextSmall} {
    display: flex;
    align-items: start;
  }
`