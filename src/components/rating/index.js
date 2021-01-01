import React from 'react';
import  StarOutline  from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import { Container } from './styles/rating'

// Custom size input string Format
export default function Rating({rating, size="1.4rem" ,...restProps}) {
  return (
    <Container {...restProps} style={{fontSize: `${size}`}}> 
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