import styled from 'styled-components'

export const Container = styled.section 
`
  display: flex;
  justify-content: flex-start;
  margin: auto;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: -360px;

`
export const Arrow = styled.div 
`
  cursor: pointer;
  position: absolute;
  top: 25%;
  left: 20px;
  transform: translateY(-50%);

  &:last-of-type {
    left: initial;
    right: 20px;
  }
  & + & > svg + svg {
    left: -3px;
  }
  > svg {
    position: relative;
    z-index: 4;
    align-self: center;
    font-size: 50px;
    transition: .4s ease-in-out;
    &:hover {
      filter: contrast(.5);
    }

    & ~ svg {
      position: absolute;
      transform: scale(.8);
      left: 3px;
      fill: white;
      z-index: 0;
    }
  }
`

export const Slide = styled.img
`
  width: 100%;
  transition: .2s;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 30%,rgba(0,0,0,0));
`

