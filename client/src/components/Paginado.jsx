import React from 'react'
import s from '../styles/Paginado.module.css'
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
    <div className={s.container}>
        <button disabled={page <= 1} className={page <= 1 ? s.disabled : s.btn} onClick={(e) => previousPage(e)}>
           Prev
        </button>
        <button disabled={page >= maxPage} className={page >= maxPage ? s.disabled : s.btn} onClick={(e) => nexPage(e)}>
            Next
        </button>
    </div>
  )
}

export default Paginado