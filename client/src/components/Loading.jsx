import React from 'react';
import s from '../styles/Loading.module.css'

const Loading = () => {
  return (
    <div className={s.loading}>
        <div className={s.spinner}></div>
    </div>
  )
}

export default Loading