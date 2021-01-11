import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { 
  Container,
  PageList,
  Pages,
  Page,
} from './styles/pagination'


export default function Pagination({ children, totalProducts, productsPerPage, setCurrentPage, currentPage, ...restProps }) {
  const pageNumbers = []
  
  const nextPage = currentPage => {
    window.scrollTo(0,0)
    setCurrentPage(currentPage + 1)
  }
  
  const prevPage = () => {
    window.scrollTo(0,0)
    setCurrentPage(currentPage - 1)
  }
  
  const paginate = pageNumber => {
    window.scrollTo(0,0)
    setCurrentPage(pageNumber)
  }

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  // Change the name of Pages to something else
  return (
    <Container {...restProps}>
      <PageList>
        <Page 
          onClick={() => prevPage(currentPage)}
          disabled={currentPage === 1}
        ><ArrowBackIcon />Prev</Page>
        {pageNumbers.map(number => (
          <Pages key={number} onClick={() => paginate(number)}>
            <Page active={number===currentPage}>
              {number}
            </Page>
          </Pages>
        ))}
        <Page 
          onClick={() => nextPage(currentPage)}
          disabled={currentPage === pageNumbers.length}
        >Next<ArrowForwardIcon /></Page>
      </PageList>
    </Container>
  )
}