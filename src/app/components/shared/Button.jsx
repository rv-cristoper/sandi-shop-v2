import React from 'react'
import './scss/button.scss'

const Button = (props) => {
   const {
      text = 'Button',
      onClick = () => { },
      disabled = false
   } = props;
   return (
      <button className='btn-dark' onClick={onClick} disabled={disabled}>
         {text}
      </button>
   )
}

export default Button