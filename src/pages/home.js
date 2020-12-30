import React from 'react';
import { ProductHome } from '../container/productHome'
import { CarouselContainer } from '../container/carousel'
import { carouselImages } from '../carouselImages'
import  { products }  from '../fakeProducts'

export default function Home() {
  
  const rowOne = products.slice(0,2)
  const rowTwo = products.slice(2,5)
  const rowThree = products.slice(5,6)

  return (
    <div className="home">
      <div>
        <CarouselContainer slides={carouselImages} />
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