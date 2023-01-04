import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../app/components/layout/mainLayout/MainLayout'
// import NavBar from '../app/components/NavBar/NavBar'
import CategoryPage from '../app/pages/CategoryPage'
import ContactPage from '../app/pages/ContactPage'
import MainPage from '../app/pages/MainPage'
import ProductPage from '../app/pages/ProductPage'

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="" element={<MainLayout />}>
               <Route index element={<MainPage />} />
               <Route path="category/:id" element={<CategoryPage />} />
               <Route path="item/:id" element={<ProductPage />} />
               <Route path="contact" element={<ContactPage />} />
               <Route path='*' element={<Navigate to="" />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default AppRouter