import React from 'react';
import { Feature } from '../components'

export function FeatureContainer({ features }) {
  return (
    <Feature>
      {features.map(feature => (
        <Feature.Item>
          {feature.text ?
            <Feature.Group>
              <Feature.Title>{feature.title}</Feature.Title>
              <Feature.Image src={feature.img} />
              <Feature.Link to={feature.link}>
                <Feature.Text>{feature.text}</Feature.Text>
              </Feature.Link>
            </Feature.Group>
            :
            <Feature.Login>
              <Feature.Title>{feature.title}</Feature.Title>
              <Feature.Button className="button">{feature.button}</Feature.Button>
            </Feature.Login>
          }
        </Feature.Item>
      ))}
    </Feature>
  )
}