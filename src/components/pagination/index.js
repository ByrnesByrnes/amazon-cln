import React from 'react';
import { 
  Container,
  PageList,
  Pages,
  Page,
} from './styles/pagination'


export default function Pagination({ children, totalProducts, productsPerPage, paginate, ...restProps }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Container {...restProps}>
      <PageList>
        {pageNumbers.map(number => (
          <Pages key={number} onClick={() => paginate(number)}>
            <Page  href="#" disabled={false}>
              {number}
            </Page>
          </Pages>
        ))}
      </PageList>
    </Container>
  )
}