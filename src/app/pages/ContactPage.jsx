import React from 'react'
import './scss/contactPage.scss'

const ContactPage = () => {
  return (
    <main className="contact_container">
      <div className="content">
        <h1>Contáctanos</h1>
        <p>¿Deseas llevar tu marca a un siguiente nivel? Vende tus productos con nosotros. Ofrecemos promociones personalizadas que cubren tus espectativas</p>
        <form>
          <div className="mb-3 ">
            <label className="form-label text-left">Nombres y apellidos</label>
            <input type="text" className="form-control form-control-lg" required />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-left">Correo electrónico</label>
            <input type="email" className="form-control form-control-lg" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Número telefónico</label>
            <input type="text" className="form-control form-control-lg" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea className="form-control form-control-lg" rows="4" required />
          </div>
          <button type="submit" className="btn btn-dark">Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default ContactPage