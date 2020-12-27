import styled from 'styled-components'

export const Container = styled.div
`
  position: relative;
  display: flex;
  .outline {
    color:#c39f57;
    filter: blur(.2px);
  }

  .fill {
    position: absolute;
    color: #ffae00;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .fill:after {
    content: "";
    position: absolute;
    opacity: .4;
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: #fff;
    filter: blur(2px) ;
  }
`