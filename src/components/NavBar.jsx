import React from 'react'
import CartWidget from './CartWidget'
import "./scss/header.scss"

const NavBar = () => {
   return (
      <header className="header_container ">
         <a href="../index.html">
            <p>͓̽s͓̽a͓͓̽̽n͓͓̽̽d͓͓̽̽i͓̽s͓̽</p>
         </a>
         <div className='header_nav'>
            <nav className="navigation">
               <ul className="main_list">
                  <li><a className="active" href="index.html">Inicio</a></li>
                  <li><a href="accessories.html">Accesorios</a></li>
                  <li><a href="fashion.html">Moda</a></li>
                  <li><a href="technology.html">Tecnología</a></li>
                  <li><a href="contact.html">Contacto</a></li>
               </ul>
            </nav>
            <CartWidget />
         </div>
      </header>
   )
}

export default NavBar