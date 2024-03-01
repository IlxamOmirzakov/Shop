import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import ProductCartItem from '../components/ProductCartItem'

const Layout = () => {
  return (
    <div>
        <Header/>
            <div className='h-[calc(100vh-65px)] overflow-y-auto'>
              <Container>
                <Outlet/>
              </Container>
            </div>
    </div>
  )
}

export default Layout
