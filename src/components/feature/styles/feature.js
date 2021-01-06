import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.section
`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 15px;
  margin: 0 10px;
`

export const Title = styled.h1 
`
  font-size: 21px;
  line-height: 30px;
  font-weight: 600;
  max-height: 70px;
`
export const Image = styled.img 
`
  margin: 10px 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Text = styled.p 
`
  margin-top: 15px;
  font-size:13px;
  line-height: 19px;
`
export const Link = styled(RouterLink)
`
  color: #007185;
  transition: .2s;
  margin-top: 10px;
  &:hover {
    color: #C7511F;
    text-decoration: underline;
  }
`

export const Button = styled.button 
`

`

export const Group = styled.div 
`
  display:flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  height: 100%;
  justify-content: space-between;
`
export const Login = styled.div 
`
  background: #fff;
  padding: 20px;
`

export const Item = styled.div 
`
  display: flex;
  flex-direction: column;
  
  position: relative;

  
  
`