import React from 'react'
import { Link, Outlet, NavLink } from "react-router-dom";
import CartWidget from './CartWidget'
import "../scss/header.scss"

const NavBar = () => {
   return (
      <>
         <header className="header_container ">
            <Link to="">
               <p>͓̽s͓̽a͓͓̽̽n͓͓̽̽d͓͓̽̽i͓̽s͓̽</p>
            </Link>
            <div className='header_nav'>
               <nav className="navigation">
                  <ul className="main_list">
                     <li><NavLink to="">Inicio</NavLink></li>
                     <li><NavLink to="category/accessories">Accesorios</NavLink></li>
                     <li><NavLink to="category/fashion">Moda</NavLink></li>
                     <li><NavLink to="category/technology">Tecnología</NavLink></li>
                     <li><NavLink to="contact">Contacto</NavLink></li>
                  </ul>
               </nav>
               <CartWidget />
            </div>
         </header>
         <Outlet />
      </>

   )
}

export default NavBar