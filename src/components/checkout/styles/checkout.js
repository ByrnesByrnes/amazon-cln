import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div
`
  display: flex;
  max-width: 1500px;
  min-width: 670px;
  margin: 10px auto;
  justify-content: space-between;
`

export const Title = styled.h1 
`
  display: flex;
  margin-right: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-end;
`
export const Advert = styled.img
`
  display: block;
  margin: 0 auto;
  width: 80%;
`
export const Left = styled.div
`
  padding: 20px;
  margin: 10px;
  background: #fff;
  min-height: 100px;
  min-width: 500px;
  width: 100%;
`
export const Right = styled.div
`

`
export const Price = styled.div
`
  color:#565959 !important;
  text-align: right;
  margin-right: 25px;
  width: 100%;
  font-size: 14px;
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
`

// Checkout Product
export const Product = styled.div 
`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  & .image {
    width: 200px;

    > img {
      width: 100%;
    }
  }

  & .title {
    font-size: 17px;
    min-width: 150px;
  }
  
  & .info {
    display: flex;
    justify-content: flex-start;
  }

  & .description {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    min-width: ;
    width: 100%;
  }

  & .action {
    display: flex;
    align-items: center;
    vertical-align: center;
  }

  & .product {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
    min-width: 400px;
    width: 100%;
  }

  & .price {
    color: ##0F1111!important;
    text-align: right;
    width: 100%;
    font-size: 18px;
  }
  
  & .availability {
    color: #0F1111;
    font-size: 14px;
    line-height: 20px;
    
    span {
      color: #B12704;
      font-size: 18px;
      line-height: 20px;
    }
  }

  p {
    font-size: 12px;

    &.stocked {
      color: #007600 !important;
    }
  }
`

