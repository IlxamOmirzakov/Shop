import { AiOutlineHeart } from "react-icons/ai"; 
import { BsCart } from "react-icons/bs"; 
import React from 'react'
import Container from './Container'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Header = () => {
  const {favorite} = useSelector(state => state.favorite)
  const {basket} = useSelector(state => state.basket)
  return (
    <div className='border-b-[1px] sticky bg-white top-0 z-20'>
      <Container>
        <header className='flex justify-between items-center gap-1 h-[65px]'>
            <Link to={'/'}>
                <h1 className="font-bold text-[20px]">Logo</h1>
            </Link>
            <div className="w-[60%]">
                <input type="search"
                placeholder="Search..."
                className="!border outline-none w-[90%] py-[7px] px-3 !border-gray-300 rounded-full bg-white text-gray-900 shadow-lg shador-gray-900/5 ring-4 ring-transparent placeholder:text-gray-800 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                />
            </div>
            <ul className="flex justify-center items-center gap-2">
                <Link to={'/basket'}>
                    <li className="flex flex-col relative hover:text-blue-300 justify-center items-center">
                        <BsCart className="text-[25px]"/>
                        <span className="text-[12px]">Basket</span>
                        <div className="absolute rounded-full text-[12px] top-[-10px] w-[18px] h-[18px] right-[-10px] flex justify-center items-center bg-blue-500 text-white">{basket.length}</div>
                    </li>
                </Link>
                <Link to={'/favorite'}>
                    <li className="flex flex-col relative hover:text-blue-300 justify-center items-center">
                        <AiOutlineHeart className="text-[25px]"/>
                        <span className="text-[12px]">Favorite</span>
                        <div className="absolute rounded-full text-[12px] top-[-10px] w-[18px] h-[18px] right-[-10px] flex justify-center items-center bg-blue-500 text-white">{favorite.length}</div>
                    </li>
                </Link>
            </ul>
        </header>
      </Container>
    </div>
  )
}

export default Header
