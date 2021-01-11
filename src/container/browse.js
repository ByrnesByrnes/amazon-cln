import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import { truncateDesc } from '../utils/utils'
import { SearchFilter } from '../hooks/searchFilter'
import { SidebarBrands } from '../hooks/sidebarBrands'

import { Pagination } from '../components'

import * as ROUTES from '../constants/routes'
import { Product, Rating, Sidebar, Layout, Checkbox } from '../components'


function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export function BrowseContainer({ products }) {
  const [queryResults, setQueryResults] = useState('')
 
  const productsPerPage = 8
  
  const { results, keys, values, currentPage, setCurrentPage, queryTitle } = SearchFilter(products)
  const { sideBrands, setSideBrands, searchBrands } = SidebarBrands(products)
  

  
  const indexOfLastProduct = currentPage * productsPerPage // page one equals 1 * 8 = 8
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage // page 2 ex 16-8 = 8
  
  // console.log(indexOfFirstProduct, ' - ', indexOfLastProduct )
  const currentProducts = results.length > 0 ? results.slice(indexOfFirstProduct, indexOfLastProduct) : products.slice(indexOfFirstProduct, indexOfLastProduct)

  
  //event for brand side bar selection
  const handleClick = event => {
    const clickTarget = event.target.textContent
    const updatedArray = sideBrands.map(brand => {
      if (clickTarget === brand.name) {
        return { ...brand, checked: !brand.checked }
      } 
      return {...brand, checked: brand.checked && false }
    })
    return setSideBrands(updatedArray)
  }
  
  const returnResults = () => {
    if(results.length === 0) {
      return (
        <p style={{ width: "100%" }}>No results found for <strong>"{values[values.length - 1]}".</strong> Showing Default Results</p>
      )

    } else {
      if (keys.length === 1 && (keys[0] === 'rating' || 'price')) {
        return (
          <p>{indexOfFirstProduct + 1}-{indexOfLastProduct > results.length ? results.length : indexOfLastProduct} of {results.length} result{currentProducts.length > 1 && "s"} for <strong>"{keys} of {values}"</strong></p>
        )
      }
      return (
        <p>{indexOfFirstProduct + 1}-{indexOfLastProduct > results.length ? results.length : indexOfLastProduct} of {results.length} result{currentProducts.length > 1 && "s"} for <strong>"{values[values.length - 1]}"</strong></p>
      )


    }
  }

  //   if (results.length === 0) {
  //     setQueryResults(<p>No results Found</p>)
  //     if (results.length === 0) {
  //       // setQueryResults(<p style={{ width: "100%" }}>No results found for <strong>"{values[0]}".</strong> Showing Default Results</p>)
  //     } else {
  //       if (keys[0] === 'rating') {
  //         setQueryResults(<p>{indexOfFirstProduct + 1} - {indexOfLastProduct > results.length ? results.length : indexOfLastProduct} of {results.length} result{currentProducts.length > 1 && "s"} for <strong>"{values[0]} stars"</strong></p>)
  //       } else {
  //         setQueryResults(<p>{indexOfFirstProduct + 1} - {indexOfLastProduct > results.length ? results.length : indexOfLastProduct} of {results.length} result{currentProducts.length > 1 && "s"} for <strong>"{values[0]}"</strong></p>)
  //       }
  //     }
  //   } else {
  //     setQueryResults(<p>showing Results</p>)
  //   }
 
  
  return (

    <Layout>
      <Layout.Row
        style={{
          borderBottom: "1px solid #ddd",
          padding: "20px",
          minHeight: "60px"
        }}
      >
        <Layout.Column style={{
          margin: "0",

        }}>
          {returnResults()}
        </Layout.Column>
      </Layout.Row>


      <Layout.Column>
        <Layout.Row>
          <Sidebar>

            <Sidebar.Option>
              <Sidebar.Subtitle>Eligible for Free Shipping</Sidebar.Subtitle>
              <Sidebar.Link>Free Shipping</Sidebar.Link>
            </Sidebar.Option>
            <Sidebar.Option>
              <Sidebar.Subtitle>Department</Sidebar.Subtitle>
              <Sidebar.Link>Computers & Accesories</Sidebar.Link>
            </Sidebar.Option>
            <Sidebar.Option>
              <Sidebar.Subtitle>Avg. Customer Review</Sidebar.Subtitle>
              {Array(4).fill().map((_, i) => (
                <Sidebar.Link
                  active={values[0] === (4 - i).toString()}
                  search={'rating'}
                  query={4 - i}
                  title={queryTitle}
                  key={i} 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    lineHeight: "20px",
                  }}>
                  <Rating rating={4 - i} /> <p> & Up</p>
                </Sidebar.Link>
              ))}
            </Sidebar.Option>
            <Sidebar.Option style={{ display: searchBrands.length > 0 ? 'block' : 'none' }}>
              <Sidebar.Subtitle>Brand</Sidebar.Subtitle>
              <Sidebar.List>
                {/* Sampe test code! */}

                {sideBrands.map((brand, i) => (
                  <Sidebar.ListItem onClick={handleClick}>
                    <Sidebar.Link
                      active={values[0] === brand.name}
                      key={i}
                      search={'brand'}
                      query={brand.name}
                    >
                      <Checkbox checked={values[0] === brand.name}>{brand.name}</Checkbox>
                    </Sidebar.Link>
                  </Sidebar.ListItem>
                ))}
              </Sidebar.List>
            </Sidebar.Option>

            <Sidebar.Option>
              <Sidebar.Subtitle>Price</Sidebar.Subtitle>
              {/* Look this after */}
              <Sidebar.List>
                <Sidebar.Link
                  active={values[values.length - 1] === '25'}
                  search={'price'}
                  query={'25'}
                  queryTwo={''}
                  title={queryTitle}
                >
                  <Sidebar.ListItem>Under $25</Sidebar.ListItem>
                </Sidebar.Link>

                {Array(4).fill().map((_, i) => (
                  <Sidebar.Link
                    active={parseInt(values[0]) === 25 * (i + 1) && parseInt(values[1]) === (i >= 4 ? 100 * i : 50 * (i + 1)) }
                    key={i}
                    search={'price'}
                    query={25 * (i + 1)}
                    queryTwo={i >= 4 ? 100 * i : 50 * (i + 1)}
                    title={queryTitle}
                  >
                    <Sidebar.ListItem>{`$${25 * (i + 1)} to $${i >= 4 ? 100 * i : 50 * (i + 1)}`}</Sidebar.ListItem>
                  </Sidebar.Link>
                ))}
                <Sidebar.Link
                  active={values[0] === '200'}
                  search={'price'}
                  query={'200'}
                  queryTwo={''}
                  title={queryTitle}
                >
                  <Sidebar.ListItem>$200 to Above</Sidebar.ListItem>
                </Sidebar.Link>
              </Sidebar.List>
            </Sidebar.Option>

          </Sidebar>
          <Product.Browse>
            {currentProducts.map(product => (
              <Product.Card key={product.id}>

                <Product.Group>
                  <Product.Link to={`${ROUTES.PRODUCT}/${product.id}`}>
                    <Product.Image src={product.image} />
                  </Product.Link>
                </Product.Group>

                <Product.Info>
                  <Product.Link
                    className="browse"
                    to={`${ROUTES.PRODUCT}/${product.id}`}
                  >
                    <Product.TitleSmall>{product.title}{product.description && ` - ${truncateDesc(product.title, product.description, 55)}...`}</Product.TitleSmall>
                  </Product.Link>
                  {product.brand &&
                    <Product.Text className="secondary">by {product.brand}</Product.Text>
                  }
                  <Rating rating={product.rating} size={"1.2rem"} />

                  {!product.available ?
                    <Product.Price
                      className="browse"
                      price={product.price}
                    >
                      {Math.floor(product.price)}
                    </Product.Price> :
                    <Product.Link to={`${ROUTES.PRODUCT}/${product.id}`}>
                      <Product.Text>Leather Bound</Product.Text>
                    </Product.Link>

                  }
                  {product.available ?
                    <Product.Text className="secondary">Currently unavailable.</Product.Text> :
                    <Product.Text className="secondary">Get it by <strong>Sunday, Jan 3 </strong>
                FREE Shipping by Amazon
                </Product.Text>
                  }
                </Product.Info>

              </Product.Card>
            ))}
          </Product.Browse>
        
        </Layout.Row>
            <Pagination 
              totalProducts={results.length || products.length} 
              productsPerPage={productsPerPage} 
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
      </Layout.Column>
    </Layout>
  )
}

BrowseContainer.defaultProps = {
  products: {

  }

}