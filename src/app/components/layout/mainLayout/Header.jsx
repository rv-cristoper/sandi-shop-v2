import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './scss/header.scss'

const Header = () => {
    return (
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
            </div>
            <div className="section_cart">
                <span>2</span>
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </div>
        </header>
    )
}

export default Header