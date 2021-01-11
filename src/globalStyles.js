import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle
`
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
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

  .button {
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
    width: 100%;
    &:hover {
      filter: contrast(.9);
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