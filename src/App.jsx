import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer message="Primera pre-entrega"/>
    </>
  )
}

export default App