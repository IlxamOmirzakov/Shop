import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './pages/Products'
import Basket from './pages/Basket'
import Favorite from './pages/Favorite'

const App = () => {

  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Products/>}/>
        <Route path='basket' element={<Basket/>}/> 
        <Route path='/favorite' element={<Favorite/>}/> 
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
