import React from 'react';
import { ProductHome } from '../container/productHome'

import { CarouselContainer } from '../container/carousel'
import { carouselImages } from '../carouselImages'
import { FeatureContainer } from '../container/feature'
import { Layout } from '../components'

import { products } from '../fakeProducts'
import { features } from '../featuresData'


export default function Home() {

  return (
    <Layout>
      <CarouselContainer slides={carouselImages} />
      <FeatureContainer features={features} />
    </Layout>
  )
}