import React, { useState } from 'react'


export function SidebarBrands(products) {
  const [sideBrands, setSideBrands] = useState([])
  
  let brands = []
  
  const searchBrands = [...new Set(products.map(product => product.brand.toLowerCase()))]


  if (sideBrands.length === 0 ) {
    for (let i = 0; i < searchBrands.length; i++) {
      brands.push({
        "name": searchBrands[i],
        "checked": false
      })
    }
    setSideBrands(brands)
  }
 

  return { sideBrands, setSideBrands, searchBrands }
}