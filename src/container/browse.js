import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

import { truncateDesc } from '../utils/utils'
import { SearchFilter } from '../utils/searchFilter'

import * as ROUTES from '../constants/routes'
import { Product, Rating, Sidebar, Layout } from '../components'


function useQuery() {
  return new URLSearchParams(useLocation().search)
}


export function BrowseContainer({ products }) {
  const [check, setCheck] = useState(false)
  const [queryResults, setQueryResults] = useState('')


  const queryTitle = useQuery().get('title')
  
  
  const {results} =  SearchFilter(products)

  // useEffect(() => {
  //   if (searchedResult) {
  //     if (results.length === 0) {
  //       setQueryResults(<p style={{ width: "100%"}}>No results found for <strong>"{searchedResult}".</strong> Showing Default Results</p>)
  //     } else {
  //       if (queryKey === 'rating') {
  //         setQueryResults(<p>{results.length} result{results.length > 1 && "s"} for <strong>"{searchedResult} stars"</strong></p>)
  //       } else {
  //         setQueryResults(<p>{results.length} result{results.length > 1 && "s"} for <strong>"{searchedResult}"</strong></p>)
  //       }
  //     }
  //   } else {
  //     setQueryResults('')
  //   }
  // }, [searchedResult])

  const browseProducts = results.length > 0 ? results : products 

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
              {queryResults}
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
              <Sidebar.Subtitle>Avg.Customer Review</Sidebar.Subtitle>
              {Array(4).fill().map((_, i) => (
                <Sidebar.Link
                  search={'rating'}
                  query={4 - i}
                  title={queryTitle}
                  key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    lineHeight: "20px",
                  }}>
                  <Rating rating={4 - i}/> <p> & Up</p>
                </Sidebar.Link>
              ))}
            </Sidebar.Option>
            <Sidebar.Option>
              <Sidebar.Subtitle>Brand</Sidebar.Subtitle>
              <Sidebar.List>
                <Sidebar.ListItem onClick={() => setCheck(!check)}>
                  <Sidebar.Label>Alienware</Sidebar.Label>
                  <Sidebar.Input type="checkbox" checked={check} />
                  <Sidebar.CheckMark></Sidebar.CheckMark>
                </Sidebar.ListItem>
                <Sidebar.Link>
                  <Sidebar.ListItem>
                    <Sidebar.Label>Eluktronics</Sidebar.Label>
                    <Sidebar.Input type="checkbox" />
                    <Sidebar.CheckMark></Sidebar.CheckMark>
                  </Sidebar.ListItem>
                </Sidebar.Link>

                <Sidebar.ListItem>
                  <Sidebar.Label>Razor</Sidebar.Label>
                  <Sidebar.Input type="checkbox" checked="checked" />
                  <Sidebar.CheckMark></Sidebar.CheckMark>
                </Sidebar.ListItem>

                <Sidebar.ListItem>
                  <Sidebar.Label>MSI</Sidebar.Label>
                  <Sidebar.Input type="checkbox" />
                  <Sidebar.CheckMark></Sidebar.CheckMark>
                </Sidebar.ListItem>

                <Sidebar.ListItem>
                  <Sidebar.Label>Acer</Sidebar.Label>
                  <Sidebar.Input type="checkbox" />
                  <Sidebar.CheckMark></Sidebar.CheckMark>
                </Sidebar.ListItem>
              </Sidebar.List>
            </Sidebar.Option>


            <Sidebar.Option>
              <Sidebar.Subtitle>Price</Sidebar.Subtitle>
              {/* Look this after */}
              <Sidebar.List>
                <Sidebar.Link
                  search={'price'} 
                  query={'25'}
                  queryTwo={''}
                  title={queryTitle}
                >
                  <Sidebar.ListItem>Under $25</Sidebar.ListItem>
                </Sidebar.Link>

                {Array(4).fill().map((_, i) => (
                  <Sidebar.Link
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
            {browseProducts.map(product => (
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
      </Layout.Column>
    </Layout>
  )
}

BrowseContainer.defaultProps = {
  products: {

  }

}