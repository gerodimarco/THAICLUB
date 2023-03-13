import React from 'react'
import "./Galeria.css";




export const Pagination = ({imagePerPage, totalImage, currentPage, setCurrentPage}) => {


  const pageNumbers =[]

  for(let i=1; i<= Math.ceil(totalImage/imagePerPage); i++) {
    pageNumbers.push(i)
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = (n) => {
    setCurrentPage(n)
  }

  return (
    
  <nav className="pagination is-centered" role="navigation" aria-label="pagination">
    <a className ={`pagination-previous ${currentPage ===1 ? "is-disabled" : ""}`} onClick={onPreviusPage}>
      Anterior</a>
    
    <ul className="pagination-list">
      {pageNumbers.map(noPage =>(
          <li key={noPage}>
            <a className={`pagination-link ${
                noPage===currentPage ? "is-current" : ""
                }`} 
                onClick={()=> onSpecificPage(noPage)}
            >
                {noPage}</a>
          </li>
      ))}
      
    </ul>
    
    <a className= {`pagination-next ${currentPage >= pageNumbers.length ? "is-disabled" : ""}`} onClick ={onNextPage}>
      Siguiente</a>

  </nav>
  )
}
