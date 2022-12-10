import React from 'react'
import './scss/loader.scss'

const Loader = ({ text }) => {
   return (
      <div className="container-loader">
         <span className="loader2"></span>
         <p>{text}</p>
      </div>
   )
}

export default Loader