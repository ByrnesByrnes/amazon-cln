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
  min-width: 70px;
`

export const Browse = styled.div 
`
  display: grid;
  padding: 20px;
  grid-template-columns:  1fr;
  grid-column-gap: 20px;

  @media(min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
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
export const TitleSmall = styled.h2
`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
`

export const Text = styled.p
`
  font-size: 14px;
  &.secondary {
   color: #565959 !important;
  }
`
export const Card = styled.div
`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
  max-width: 300px;
  min-height: 400px;
  border-bottom: 2px solid #ddd;
  margin: 15px 0;
  max-height: 450px;
`

export const TextSmall = styled.p
`
font-size: 12px;

  &.stocked {
    color: #007600 !important;
  }
`

export const Image = styled.img
`
  height:200px;
  width: 100%;
  object-fit: contain;
`

export const Price = styled.div
`
  margin-top: 5px;
  font-weight: 500;
  
  &.browse {
    display: flex;
    height: fit-content;
    align-items: flex-start;
    font-size: 24px;
    font-weight: 400;
    margin: 10px 0;
    &:before {
      margin-right: 1px;
      transform: translateY(-2px);
      content: "CND$";
      font-size:12px;
    }

    &:after {
      transform: translateY(-2px);
      content: "${({getDecimal}) => getDecimal}";
      font-size:12px;
    }
  }
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

  &:visited {
    color: #007185;
  }

  &:hover {
    color: #C7511F;
    text-decoration: underline;
  }

  &.browse {
    color: #0F1111;

    :hover {
      color: #C7511F;
      text-decoration: none;
    }
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

export const Center = styled.div
`
  width: 40%
`

export const SideLeft = styled.div
`
  width: 35%;
`

export const Sidebar = styled.div
`
  margin-left: 20px;
  width: 200px;
  border-radius: 4px;
  border: 1px solid lightgray;
`

export const Available = styled.div
`
  color: #0F1111;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 12px;

  span {
    color: #B12704;
    font-size: 18px;
    line-height: 20px;
  }
`
export const Specifications = styled.div
`
  width: 250px;

  > td {
    margin-bottom: 8px;

    &:first-of-type {
      font-weight: 500 !important;
    }
  } 
`

export const Rating = styled.div
`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Brand = styled.div
`
  color:#007185;

  &:hover {
    text-decoration: underline;
  }
`