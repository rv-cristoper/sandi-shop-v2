import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../app/components/NavBar/NavBar'
import CategoryPage from '../app/pages/CategoryPage'
import ProductPage from '../app/pages/ProductPage'

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="" element={<NavBar />}>
               <Route index element={<div>Página principal</div>}></Route>
               <Route path="category/:id" element={<CategoryPage />} />
               <Route path="item/:id" element={<ProductPage />} />
               <Route path="contact" element={<div>Página de contacto</div>} />
               <Route path='*' element={<Navigate to="" />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default AppRouter