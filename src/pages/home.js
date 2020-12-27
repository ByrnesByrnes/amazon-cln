import React from 'react';
import { ProductHome } from '../container/productHome'
import  { products }  from '../fakeProducts'

export default function Home() {
  
  const rowOne = products.slice(0,2)
  const rowTwo = products.slice(2,5)
  const rowThree = products.slice(5,6)

  return (
    <div className="home">
      <div>
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Gradient with Prime video"
        />
        <div className="row">
          {rowOne.map((product, i) => (
            <div key={i} className="item">
              <ProductHome  product={product}/>
            </div>
          ))}
        </div>
        <div className="row">
          {rowTwo.map((product, i) => (
            <div key={i} className="item">
              <ProductHome  product={product}/>
            </div>
          ))}
        </div>
        <div className="row">
          {rowThree.map((product, i) => (
            <div key={i} className="item">
              <ProductHome  product={product}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}