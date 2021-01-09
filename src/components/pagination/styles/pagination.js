import styled from 'styled-components'


export const Container = styled.div 
`
  margin: auto;
 
`


export const PageList = styled.ul
`
  display: flex;
`

export const Pages = styled.li
`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0 2px;
  padding: 8px 12px 7px 13px;
  cursor: pointer;
  background: rgb(240,240,240);
  background: linear-gradient(180deg, rgba(240,240,240,1) 30%, rgba(220,220,220,1) 100%);  
  border-radius: 2px;
  height: 30px;
  border: 1px solid darkgray;
  
  color: #111;
  box-shadow: 0 1px 0 rgba(255,255,255,.4) inset;
  transition: .1s ease-in-out;
  outline: none;

  &:disabled {
    filter: contrast(.6);
    cursor: auto;
  }

  &:disabled:hover {
    filter: contrast(.6);
  }

  &:hover {
    filter: contrast(.9);
  }
`

export const Page = styled.a
`
  color: inherit;
`

