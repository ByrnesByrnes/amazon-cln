import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
export const Container = styled.section
  `
  padding: 20px 40px;
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
`
export const Frame = styled.div
  `
  box-sizing: border-box;
  margin: 10px auto 0;
  

  border: solid 1px #ddd;
  border-radius: 8px;
  overflow: hidden;
`

export const Row = styled.div
  `
  display: flex;
  justify-content: start;
  border-bottom: none;

  
`

export const Group = styled.div
  `
  padding: 10px;

  > img {
    width: 150px;
  }

  & + ${Row} + ${Row} {
    margin-top: 10px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    
  }
`

export const Item = styled.div
  `
  width: 100%;

`

export const Title = styled.h1
  `

`

export const Subtitle = styled.h3
  `
  font-weight: 500;
`
export const Text = styled.p
  `
  font-size: 13px !important;
  line-height: 1.465 !important;
  text-transform: inherit;
  color: inherit !important;

  & + & {
    text-transform: capitalize;
  }
`
export const Label = styled.div
  `
  text-transform: uppercase;
  &:last-of-type {
   margin-right: 10px;
  }
  color: #565959 !important;
    & ~ & {
      margin-left: 50px;
    }
`
export const Price = styled.span
  `
  color: #B12704 !important;
  font-size: 12px;

`
export const Link = styled(RouterLink)
  `
  text-transform: initial;
  color: #0066c0;
 
  & + & {
    border-left: solid 1px #ddd;
    padding-left:7px;
    margin-left: 7px;
  }

  &:hover {
    color: #c45500;
  }
`
export const Info = styled.div
  `
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
  padding: 5px 10px;
  align-items: center;
`
export const Button = styled.button
  `
  display: flex;
  align-items: center;
  text-align: center;
  justify-content:center;
  width: 150px;
  cursor: pointer;
  background: rgb(238,209,135);
  background: linear-gradient(180deg, rgba(238,209,135,1) 43%, rgba(240,193,75,1) 92%); 
  border-radius: 2px;
  height: 30px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  margin-top: 10px;
  color: #111;
  box-shadow: 0 1px 0 rgba(255,255,255,.4) inset;
  transition: .1s ease-in-out;
  outline: none;

  &.secondary {
    border-color:  darkgray;
    background: rgb(240,240,240);
    background: linear-gradient(180deg, rgba(240,240,240,1) 30%, rgba(220,220,220,1) 100%);  
  }

  &:hover {
    filter: contrast(.9);
  }
`

