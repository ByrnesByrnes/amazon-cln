import React from 'react';
import {BrowseContainer} from '../container/browse'
import { products } from '../fakeProducts'

export default function Browse() {
 
  return (
    <>
      <BrowseContainer  products={products}/>
    </>
  )
}
