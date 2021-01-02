import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { truncateDesc } from '../utils/utils'
import { useLocation, useParams } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
// import { Link } from 'react-router-dom'
import { Product, Rating, Sidebar } from '../components'
import { Autorenew } from '@material-ui/icons';

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export function BrowseContainer({ products }) {
  const [check, setCheck] = useState(false)
  const [queryResults, setQueryResults] = useState('')
  const { search } = useParams()
  

  let query = useQuery().get("search").toLowerCase()
  
  const results = products.filter(product => product.title.toLowerCase().includes(query))

  const browseProducts = results.length > 0 ? results : products

  useEffect(() => {
    if (query !== "")  {
      if (results.length === 0) {
        setQueryResults(<div>No results found for <strong>"{query}".</strong> Showing Default Results</div>)
      } else {
        setQueryResults(<div>{results.length} result{results.length > 1 && "s"} for <strong>"{query}"</strong></div>)
      }
    } else {
      setQueryResults('')
    }
  },[query])
  
  return (

    <div style={{
      background: "white",
    }}>
    <div style={{
      borderBottom: "1px solid #ddd",
    }}>

      <div style={{
        maxWidth: "1500px",
        padding: "20px",
        margin: "auto",
        minHeight: "60px"
        
      }}>
      {queryResults}
      </div>
    </div>
      <div style={{
        position: "relative",
        display: "flex",
        maxWidth: "1500px",
        margin: "auto",
      }}>

        <Sidebar style={{
          margin: "15px",
          width: "250px",
          height: "100vh",
          backgroundColor: "#fff",
          borderRight: "1px solid #ddd",

        }}>

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
              <Sidebar.Link key={i} style={{
                display: "flex",
                alignItems: "center",
                lineHeight: "20px",
              }}>
                <Rating rating={4 - i} /> <p> & Up</p>
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

              <Sidebar.ListItem>
                <Sidebar.Label>Eluktronics</Sidebar.Label>
                <Sidebar.Input type="checkbox" />
                <Sidebar.CheckMark></Sidebar.CheckMark>
              </Sidebar.ListItem>

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
              <Sidebar.Link>
                <Sidebar.ListItem>Under $25</Sidebar.ListItem>
              </Sidebar.Link>
              <Sidebar.Link>
                <Sidebar.ListItem>$25 to $50</Sidebar.ListItem>
              </Sidebar.Link>
              <Sidebar.Link>
                <Sidebar.ListItem>$50 to $75</Sidebar.ListItem>
              </Sidebar.Link>
              <Sidebar.Link>
                <Sidebar.ListItem>$75 to $100</Sidebar.ListItem>
              </Sidebar.Link>
              <Sidebar.Link>
                <Sidebar.ListItem>$100 to $200</Sidebar.ListItem>
              </Sidebar.Link>
              <Sidebar.Link>
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

      </div>
    </div>
  )
}


BrowseContainer.defaultProps = {
  products: {

  }

}