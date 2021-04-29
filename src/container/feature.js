import React from 'react';
import { Feature } from '../components'
import * as ROUTES from '../constants/routes'

export function FeatureContainer({ features, user }) {

  if(!user) features = features.slice(0, features.length - 1)

  return (
    <Feature>
      {features.map((feature, i) => (
        <React.Fragment key={i}>
          {feature.text ?
            <Feature.Item key={i}>
              <Feature.Group>
                <Feature.Title>{feature.title}</Feature.Title>
                <Feature.Link to={feature.link}>

                <Feature.Image src={feature.img} alt={feature.title}/>
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
        </React.Fragment>
      ))}
    </Feature>

  )
}