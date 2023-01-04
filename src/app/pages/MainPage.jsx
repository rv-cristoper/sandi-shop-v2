import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
import './scss/mainPage.scss'

const MainPage = () => {

   const cardList = [
      {
         name: 'Pulseras',
         image: '/images/pulsera.webp',
         url: 'category/accessories'
      },
      {
         name: 'Carteras',
         image: '/images/cartera.webp',
         url: 'category/accessories'
      },
      {
         name: 'Ropa',
         image: '/images/ropa.webp',
         url: 'category/fashion'
      },
      {
         name: 'Pashminas',
         image: '/images/pashmina.webp',
         url: 'category/fashion'
      },
      {
         name: 'Parlantes',
         image: '/images/parlante.webp',
         url: 'category/technology'
      },
      {
         name: 'Audífonos',
         image: '/images/audifono.webp',
         url: 'category/technology'
      },
   ]

   return (
      <main className="main_container">
         <div className="page_space">
            <div className="information">
               <p>Mil maneras de ir</p>
               <h1>Construyendo tu bienestar</h1>
               <p className="description">Presentamos Sandi's, tienda online en donde encontraras todo lo que necesitas en un
                  solo lugar.</p>
               <Link to='category/accessories' className="btn_to_nav">
                  Empezar a comprar
                  <i className="fa-solid fa-angle-right"></i>
               </Link>
            </div>
            <div className="image_information">
               <img src="/images/girlShopping.webp" width="691" height="460" alt="girl shopping" />
            </div>
            <section className="sectionA">
               <h2>¿Qué estás buscando?</h2>
               <div className="content_items">
                  {
                     cardList.map(({ name, image, url }, key) =>
                        <Card name={name} image={image} url={url} key={key} />
                     )
                  }
               </div>
            </section>
            <section className="sectionB">
               <h2>Te podría interesar</h2>
               <div className="container_carousel">
                  <div className="swiper mySwiper">
                     <div className="swiper-wrapper" id="listProducts">
                     </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
               </div>
            </section>
            <section className="sectionC">
               <h2>Lo que tenemos para ti</h2>
               <a href="pages/accessories.html">
                  <img src="/images/nuevaTemporada.webp" width="960" height="609" alt="nuevaTemporada" />
               </a>
            </section>
            <section className="sectionD">
               <h2>Descubre lo nuevo</h2>
               <a href="pages/fashion.html">
                  <img src="/images/descubre.webp" width="960" height="609" alt="descubre" />
               </a>
            </section>
         </div>
      </main>
   )
}

export default MainPage