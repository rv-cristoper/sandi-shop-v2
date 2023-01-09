import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactPageController from '../../../controllers/ContactPageController'
import Button from '../../shared/Button'
import './scss/footer.scss'

const Footer = () => {
   
   const [email, setEmail] = useState('')
   const [loading, setLoading] = useState(false)

   const onSubmit = (e) => {
      e.preventDefault();
      ContactPageController.saveEmail({
         email,
         setLoading,
         setEmail
      })
   }

   return (
      <footer className="footer_container">
         <div className="footer_information">
            <div className="first_section">
               <div className="column_item">
                  <h3>Tienda</h3>
                  <ul>
                     <li><Link to="category/accessories">Accesorios</Link></li>
                     <li><Link to="category/fashion">Moda</Link></li>
                     <li><Link to="category/technology">Tecnología</Link></li>
                  </ul>
               </div>
               <div className="column_item">
                  <h3>Equipo</h3>
                  <ul>
                     <li><a href="pages/contact.html">Sandi's</a></li>
                  </ul>
               </div>
               <div className="column_item">
                  <h3>Contáctanos</h3>
                  <a href="tel:+51963456879" className="contac_number"><i className="fa-solid fa-phone"></i> +51 963456879</a>
               </div>
               <div className="column_item">
                  <h3>Suscríbete</h3>
                  <p>Sé el primero en conocer nuestras nuevas colecciones.</p>
                  <form onSubmit={onSubmit}>
                     <input type="email" value={email} required placeholder="Correo electrónico*" onChange={(e) => setEmail(e.target.value)} />
                     <Button type='submit' text={loading ? 'Enviando...' : 'Registrarse'} disabled={loading} />
                  </form>
               </div>
            </div>
            <div className="last_section">
               <p>Copyright © 2022 Sandi's shop S.A.</p>
               <div className="content_icons">
                  <a href="https://www.facebook.com" without='true' rel="noreferrer" target="_blank" title="facebook" className="icon">
                     <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="https://www.instagram.com" without='true' rel="noreferrer" target="_blank" title="instagram" className="icon">
                     <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com" without='true' rel="noreferrer" target="_blank" title="youtube" className="icon">
                     <i className="fab fa-youtube"></i>
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer