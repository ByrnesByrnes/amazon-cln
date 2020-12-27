import React from 'react';
import  StarOutline  from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import { Container } from './styles/rating'

export default function Rating({rating,...restProps}) {
  return (
    <Container {...restProps}>
      {Array(5).fill().map((_, i) =>(
        <StarOutline className="outline" key={i} />
      ))}
      <div className="fill">
        {Array(rating).fill().map((_, i) =>(
          <StarIcon key={i} />
        ))}
      </div>
    </Container>
  )
}