import isEmpty from 'is-empty';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import Button from '../components/shared/Button';
import CartPageController from '../controllers/CartPageController';
import './scss/cartPage.scss';

const CartPage = () => {
  const { products, totalPrice, clear } = useContext(CartContext);

  const [data, setData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    repeatEmail: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    text: '',
    status: false
  })

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
    if (!isEmpty(message.text)) {
      if (name === 'email') validateEmail(data.repeatEmail, value, true);
      if (name === 'repeatEmail') validateEmail(data.email, value, true);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const status = validateEmail(data.email, data.repeatEmail);
    if (status) {
      CartPageController.saveOrder({
        setLoading,
        setMessage,
        setData,
        clear,
        order: {
          buyer: {
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            email: data.email
          },
          items: products,
          total: totalPrice()
        }
      })
    }
  }

  const validateEmail = (email1, email2, type = false) => {
    if (email1 !== email2) {
      setMessage({
        text: 'Los correos no coinciden',
        status: false
      })
      return false
    }
    else {
      if (type) {
        setMessage({
          text: 'Los correos coinciden',
          status: true
        })
      }
      return true
    }
  }

  const validateInputs = () => {
    if (!isEmpty(data.name) && !isEmpty(data.surname) && !isEmpty(data.phone) && !isEmpty(data.email) && !isEmpty(data.repeatEmail)) return false;
    return true;
  }

  return (
    <main className='cart_container'>
      <div className='cart_space'>
        <div className=''>

        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className="mb-3 ">
              <label className="form-label text-left">Nombres</label>
              <input type="text" name='name' value={data.name} className="form-control form-control-lg" onChange={onChange} required />
            </div>
            <div className="mb-3 ">
              <label className="form-label text-left">Apellidos</label>
              <input type="text" name='surname' value={data.surname} className="form-control form-control-lg" onChange={onChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Número telefónico</label>
              <input type="text" name='phone' value={data.phone} className="form-control form-control-lg" onChange={onChange} required />
            </div>
            <div className="mb-3 ">
              <label className="form-label text-left">Correo electrónico</label>
              <input type="email" name='email' value={data.email} className="form-control form-control-lg" onChange={onChange} required />
            </div>
            <div className="mb-3 ">
              <label className="form-label text-left">Repita correo electrónico</label>
              <input type="email" name='repeatEmail' value={data.repeatEmail} className="form-control form-control-lg" onChange={onChange} required />
            </div>
            {!isEmpty(message.text) &&
              < p className={`message ${message.status ? 'success' : 'error'}`}>{message.text}</p>
            }
            <Button type='submit' text={loading ? 'Enviando...' : 'Realizar compra'} disabled={validateInputs()} />
          </form>
        </div>
      </div>
    </main >
  )
}

export default CartPage