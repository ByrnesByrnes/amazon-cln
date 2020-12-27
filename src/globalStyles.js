import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle
`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #111;
    // font-size 14px;
    line-height: 20px;
  }

  /* ----- General Styles ----- */
  h1,h2,h3,h4,h5,p {
    padding:0;
    margin: 0;
  }
  
  h1{
    font-weight: 400;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: rgb(234,237, 237);
  }

  a {
    text-decoration: none;
  }
 
  input:focus,
  button:focus {
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
  }

  hr {
    background-color: transparent;
    display: block;
    border-width: 0;
    border-top: 1px solid #c0c0c0;
    line-height: 19px;
    margin-top: 3px;
    margin-bottom: 14px;
  }

  .home {
    display:flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;

    & .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      padding: 20px;
      width: 100%;
      max-height: 400px;
      min-width: 100px;
      background-color: #fff;
      z-index: 1;
    }

    &__image {
      width:100%;
      z-index: -1;
      margin-bottom: -150px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0));
    }
  }

  .row {
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
  }

  .checkout {
    display: flex;
    max-width: 1500px;
    min-width: 670px;
    margin: 10px auto;
    justify-content: space-between;
   
    
    &__ad {
      display: block;
      margin: 0 auto;
      width: 80%;
    }

    &__title {
      display: flex;
      margin-right: 10px;
      padding: 10px;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__info {
      display: flex;
    }

    &__description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
    }

    &__action {
      display: flex;
      align-items: center;
      vertical-align: center;
    }

    &__product {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: fit-content;
      width: 100%;
    }

    &__left {
      padding: 20px;
      margin: 10px;
      background: #fff;
      min-height: 100px;
      min-width: 360px;
      width: 100%;
    }

    &__right {
    }

    &__price {
      color:#565959 !important;
      text-align: right;
      margin-right: 25px;
      width: 100%;
      font-size: 14px;
    }
  }

  /* ----------- Payment Page ------------ */
  .payment {
    background-color: #fff;

    &__mainTitle {
      text-align: center;
      padding: 10px;
      background-color: rgb(234,237,237);
      border-bottom: 1px solid lightgrey;
    }

    &__section {
      max-width: 1500px;
      display: flex;
      padding: 20px;
      margin: 0 auto;
      border-bottom: 1px solid lightgrey;
    }

    &__title {
      flex: .2;
    }

    &__right {
      flex: .8;
    }
  }

  /* ----------- Product Page ------------ */
  .productPage {
    margin: 20px 10px;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', san-serif;

    &__container {
      max-width: 1500px;
      margin: 0 auto;
    }

    &__left {
      width: 37%;
    }

    &__right {
      width: 60%;
    }

    &__advert {
      display: block;
      width: 70%;
      margin: 0px auto;
    }

    &__image {
      width: 100%;
      margin: 0 auto;
    }

    &__title {
      font-size: 24px;
      line-height: 32px;
      color: #0F1111;
    }

    &__brand {
      color:#007185;
    }

    &__brand:hover {
      text-decoration: underline;
    }

    &__rating {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    &__about {
      letting-spacing: .5px;
      font-size: 16px !important;
      line-height: 24px;
      font-weight: 700 !important;
      padding-bottom: 4px;
    }

    &__availability {
      color: #0F1111;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 12px;

      span {
        color: #B12704;
        font-size: 18px;
        line-height: 20px;
      }
    }

    &__specifications {
      width: 250px;
    }


    &__td {
      margin-bottom: 8px;

      &:first-of-type {
        font-weight: 500 !important;
      }
    } 
  }

`

/*
#7B3F61
*/