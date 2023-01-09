import React from 'react'
import './scss/button.scss'

const Button = (props) => {
   const {
      type = 'button',
      text = 'Button',
      onClick = () => { },
      disabled = false
   } = props;
   return (
      <button type={type} className='btn-dark' onClick={onClick} disabled={disabled}>
         {text}
      </button>
   )
}

export default Button