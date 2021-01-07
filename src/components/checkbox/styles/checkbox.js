import styled from 'styled-components'

export const Input = styled.input
  `
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

`

export const Checkmark = styled.span
  `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2.5px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
`

export const Label = styled.span
  `
  margin-left: 25px;
  text-transform: capitalize;
  transition: .2s;
 
  
  & ~ ${Input}:checked ~ ${Checkmark} {
    background: #007185;
 
  }

  & ~ ${Input}:checked ~ ${Checkmark}:after {
    display: block;
  }
`

export const Container = styled.div 
`
  cursor: pointer;

  &:hover  {
    color: #C7511F;

    & > ${Input} ~ ${Checkmark} {
      background: lightgrey;
    }
  }

  & > ${Input}:checked ~ ${Checkmark} {
    background: #007185;
  }

  & > ${Input}:checked ~ ${Checkmark}:after {
    display: block;
  }
`