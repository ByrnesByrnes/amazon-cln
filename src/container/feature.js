import React from 'react';
import { Feature } from '../components'
import * as ROUTES from '../constants/routes'

export function FeatureContainer({ features, user }) {


  return (
    <Feature>
      {features.map(feature => (
        <>
          {feature.text ?
            <Feature.Item>
              <Feature.Group>
                <Feature.Title>{feature.title}</Feature.Title>
                <Feature.Link to={feature.link}>

                <Feature.Image src={feature.img} />
                </Feature.Link>
                <Feature.Link to={feature.link}>
                  <Feature.Text>{feature.text}</Feature.Text>
                </Feature.Link>
              </Feature.Group>
            </Feature.Item> :
            <Feature.Item style={{ display: user ? 'none' : '' }}>
              <Feature.Login>
                <Feature.Title>{feature.title}</Feature.Title>
                <Feature.Link to={ROUTES.LOGIN}>
                  <Feature.Button className="button">{feature.button}</Feature.Button>
                </Feature.Link>
              </Feature.Login>
            </Feature.Item>
          }
        </>
      ))}
    </Feature>

  )
}