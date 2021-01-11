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
  list-style: none;
`

export const Page = styled.button
`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0 2px;
  padding: 8px 12px 7px 13px;
  cursor: pointer;
  border-radius: 2px;
  height: 30px;
  background: ${({ active }) => active ? '#fff' : 'rgb(240,240,240)'};
  background: ${({ active }) => active ? '#fff' : 'linear-gradient(180deg, rgba(240,240,240,1) 30%, rgba(220,220,220,1) 100%)'} ;  
  border: 1px solid ${({ active }) => active ? '#e77600' : 'darkgray'};
  color: ${({ active }) => active ? '#c45500': 'inherit' };
  box-shadow: 0 1px 0 rgba(255,255,255,.4) inset;
  transition: .1s ease-in-out;
  outline: none;

  & > svg {
    font-size: 15px;
    margin: 0 5px;
  }

  &:disabled {
    border: none;
    background: #fff;
    
    filter: contrast(1);
    cursor: auto;
  }

  &:disabled:hover {
   filter: contrast(1);
  }

  &:hover {
    filter: contrast(.9);
  }
`

