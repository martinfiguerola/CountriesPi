import React from 'react'

const Paginado = ({page, setPage, maxPage}) => {
    
    const nexPage = (e) => {    
        e.preventDefault()
        setPage(page + 1)
    }
    const previousPage = (e) => {    
        e.preventDefault()
        setPage(page - 1)
    }

  return (
    <div>
        <button disabled={page <= 1} onClick={(e) => previousPage(e)}>
            Previous
        </button>
        <button disabled={page >= maxPage} onClick={(e) => nexPage(e)}>
            Next
        </button>
    </div>
  )
}

export default Paginado