import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.section
`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  .break {
    position: relative;
    padding-top: 10px;
    height: 44px;
    margin-bottom: -18px;
    background: linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);
  }

  .break:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 44px;
    display: block;
    background: linear-gradient(to right,#fff,rgba(255,255,255,0),#fff);
  }
`
export const Frame = styled.form
`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
`
export const Title = styled.h1
`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 15px;
  line-height: 1.2;
`
export const Subtitle = styled.h5
`
  margin-bottom: 5px;
`
export const Text = styled.p
`
  position: relative;
  z-index: 1;
  margin-top: 15px;
  font-size: 12px;
`
export const Input = styled.input
`
  box-sizing: border-box;
  border: 1px solid #a6a6a6;
  border-radius: 3px;
  height: 30px;
  padding-left: 5px;
  margin-bottom: 10px;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07);
  transition: .1s ease-in-out;

  &.error {
    border-color: #d00;
    box-shadow: 0 0 0 3px rgba(221, 0, 0, 0.1) inset;
  }

  & + ${Text} {
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 10px;
    & svg {
      font-size: 15px;
      margin-right: 5px;
      fill: #0066c0;
    }
  }
`

export const Image = styled.img
`
  margin: 20px auto;
  object-fit: contain;
  width: 100px;
`
export const Link = styled(RouterLink)
`
  position: relative;
  color: #0066c0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #c45500;
  }

  & svg {
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    font-size: 13px;
  }
`

export const Button = styled.button
`
  width: 100%;
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

  &:disabled {
    filter: contrast(.6);
    cursor: auto;
  }
  &:disabled:hover {
    filter: contrast(.6);
  }

  &.register {
    border-color:  darkgray;
    background: rgb(240,240,240);
    background: linear-gradient(180deg, rgba(240,240,240,1) 30%, rgba(220,220,220,1) 100%);  
  }

  &:hover {
    filter: contrast(.9);
  }

  & + ${Text} {
    line-height: 1.5;
  }
`
