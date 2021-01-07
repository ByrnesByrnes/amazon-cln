import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export function SearchFilter(products) {
  const [results, setResults] = useState([])
  
  const searchParams = useQuery()

  const queries = {}

  // find all parameters and puts them into an object
  searchParams.forEach((value, key) => {
    queries[key] = value
  })

  console.log(queries, 'Queries')

  const keys = Object.keys(queries)
  const values = Object.values(queries)
  
  const objectKeys = Object.keys(queries).join(' ')

  useEffect(() => {
    
    let result;

    if (Object.keys(queries).length > 1) {
      //  if multiple queries are returned
      switch (objectKeys) {
        case 'rating title':
          console.log('Rating Comparison')
          result = products.filter(product => product[keys[keys.length - 1]].toLowerCase().includes(values[values.length - 1]) && product[keys[0]] >= values[0])
          return setResults(result)

        case 'price title':
          return products
        case 'price price_to':
          console.log('Pricing Comparison')
          result = products.filter(product => product[keys[0]] >= parseInt(values[0]) && product[keys[0]] <= parseInt(values[1]))
          return setResults(result)

        case 'price price_to title':
          console.log('Price with title')
          result = products.filter(
            product => product[keys[0]] >= parseInt(values[0]) && 
            product[keys[0]] <= parseInt(values[1]) && 
            product[keys[keys.length - 1]].toLowerCase().includes(values[values.length - 1]))
          return setResults(result)
        default:
          return products
      }
    } else {
      // if only One query is returned
      switch (objectKeys) {
        case 'title':
          result = products.filter(product => product[keys].toLowerCase().includes(values[0]))
          return setResults(result)
        case 'brand':
          result = products.filter(product => product[keys].toLowerCase().includes(values[0]))
          return setResults(result)
        case 'rating':
          result = products.filter(product => product[keys] >= values)
          return setResults(result)
        case 'price':
          result = products.filter(product => {
            if (product[keys] <= 25 && values[0] <= 25) {

              return product
            } else if (product[keys] >= 200 && values[0] >= 200) {
              
              return product
            }
            return null
          })
          return setResults(result)

        default:
          return products
      }
    }

    
  }, [keys[0], values[0], keys.length])
  // const test = products.filter(product => product[pair[0]].includes(pair[1]))
  // console.log(test)

  // console.log(results, 'Declared')

  return { results, keys, values }
}