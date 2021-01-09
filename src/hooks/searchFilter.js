import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export function SearchFilter(products) {
  const [results, setResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const searchParams = useQuery()
  const queryTitle = useQuery().get('title')

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
      setCurrentPage(1)
      switch (objectKeys) {
        case 'rating title':
          result = products.filter(product => product[keys[keys.length - 1]].toLowerCase().includes(values[values.length - 1]) && product[keys[0]] >= values[0])
          return setResults(result)
        case 'price title':
          console.log("PRICE TITLE")

          if (values[0] <= 25) {
            console.log('under 25')
            result = products.filter(product => product[keys[keys.length - 1]].toLowerCase().includes(values[values.length - 1]) && product[keys[0]] <= values[0])
          } else if (values[0] >= 200) {
            result = products.filter(product => product[keys[keys.length - 1]].toLowerCase().includes(values[values.length - 1]) && product[keys[0]] >= values[0])
          }
          return setResults(result)

        case 'price price_to':
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
      setCurrentPage(1)
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
          if (values[0] <= 25) {
            result = products.filter(product => product[keys] <= values[0])
          } else if (values[0] >= 200) {
            result = products.filter(product => product[keys] >= values[0])
          }
          return setResults(result)

        default:
          return products
      }
    }
  }, [keys[0], values[0], keys.length])

  return { results, keys, values, currentPage, setCurrentPage, queryTitle }
}