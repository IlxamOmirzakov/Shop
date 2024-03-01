import { BsFillBasketFill } from "react-icons/bs"; 
import React from 'react'
import {useSelector} from 'react-redux'
import ProductCartItem from '../components/ProductCartItem'
import { Typography } from '@material-tailwind/react'


const Favorite = () => {
  const {favorite} = useSelector(state => state.favorite)
  return (
    <div className="flex sm:justify-center md:justify-start">
        {favorite.length > 0 ? 
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-3'> 
          {favorite.map(item => (
            <ProductCartItem item={item} key={item.id}/>
          ))} 
        </div> :
        <div className='h-[70vh] w-full flex flex-col gap-2 justify-center items-center'>
          <BsFillBasketFill className='text-[20px]'/>
          <Typography className='text-18px text-bold'>
            Favorite product not found!
          </Typography>
        </div>
        } 
      </div> 
  )
}

export default Favorite
