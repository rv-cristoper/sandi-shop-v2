import React, { useState } from 'react'
import Button from '../components/shared/Button'
import ContactPageController from '../controllers/ContactPageController'
import './scss/contactPage.scss'

const ContactPage = () => {

  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    ContactPageController.saveInformation({
      data,
      setLoading,
      setData
    })
  }

  return (
    <main className="contact_container">
      <div className="content">
        <h1>Contáctanos</h1>
        <p>¿Deseas llevar tu marca a un siguiente nivel? Vende tus productos con nosotros. Ofrecemos promociones personalizadas que cubren tus espectativas</p>
        <form onSubmit={onSubmit}>
          <div className="mb-3 ">
            <label className="form-label text-left">Nombres y apellidos</label>
            <input type="text" name='fullName' value={data.fullName} className="form-control form-control-lg" onChange={onChange} required />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-left">Correo electrónico</label>
            <input type="email" name='email' value={data.email} className="form-control form-control-lg" onChange={onChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Número telefónico</label>
            <input type="text" name='phone' value={data.phone} className="form-control form-control-lg" onChange={onChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea className="form-control form-control-lg" name='message' value={data.message} rows="4" onChange={onChange} required />
          </div>
          <Button type='submit' text={loading ? 'Enviando...' : 'Enviar'} disabled={loading} />
        </form>
      </div>
    </main>
  )
}

export default ContactPage