import styled from 'styled-components'

export const Container = styled.div
`
  display: flex;
  flex-direction: column;
  jusify-content: space-between;
  width: 250px;
  height: 100px;
  padding: 20px;
  margin: 10px 10px 0 0;
  background-color: #fff;
  

`
export const Text = styled.small
`

`
export const Calc = styled.div
`
  & strong {
    margin-left: 5px;
  }
`

export const Gift = styled.small
`
  display: flex;
  align-items: center;
  & input {
    margin-right: 5px;
  }
`

export const Button = styled.button
`
  cursor: pointer;
  background: rgb(238,209,135);
  background: linear-gradient(180deg, rgba(238,209,135,1) 43%, rgba(240,193,75,1) 92%); 
  border-radius: 2px;
  height: 30px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
 
  margin: 10px auto 0;
  color: #111;
  box-shadow: 0 1px 0 rgba(255,255,255,.4) inset;
  width: 90%;
  &:hover {
    filter: contrast(.9);
  }
`