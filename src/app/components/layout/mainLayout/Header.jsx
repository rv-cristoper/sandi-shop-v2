import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../../../context/CartContext';
import './scss/header.scss'

const Header = () => {
    const { totalItems } = useContext(CartContext);
    const total = totalItems();
    const showTotal = total > 0 ? 'show' : '';
    return (
        <header className="navbar navbar-expand-lg p-0">
            <div className="container-fluid header_container ">
                <Link to="">
                    <p className="m-0">͓̽s͓̽a͓͓̽̽n͓͓̽̽d͓͓̽̽i͓̽s͓̽</p>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="collapse navbar-collapse navigation" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center main_list">
                        <li className='nav-item'><NavLink to="">Inicio</NavLink></li>
                        <li className='nav-item'><NavLink to="category/accessories">Accesorios</NavLink></li>
                        <li className='nav-item'><NavLink to="category/fashion">Moda</NavLink></li>
                        <li className='nav-item'><NavLink to="category/technology">Tecnología</NavLink></li>
                        <li className='nav-item'><NavLink to="contact">Contacto</NavLink></li>
                    </ul>
                </nav>
                <Link to="/cart">
                    <div className="section_cart">
                        <span className={showTotal}>{total}</span>
                        <i className="fa-sharp fa-solid fa-cart-shopping" />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header