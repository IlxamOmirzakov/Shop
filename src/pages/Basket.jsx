import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { BsFillBasketFill } from "react-icons/bs";  
import { useSelector } from 'react-redux'
import BasketCartItem from '../components/BasketCartItem'

const Basket = () => {
  const {basket, countBasketItem, price} = useSelector(state => state.basket)
  console.log(`basket = ${basket.length} countBasketItem = ${countBasketItem.length}`)
  console.log(price)

  return (
    <div className='py-[20px] flex gap-2'>
      {basket.length > 0?
        <div className='flex gap-2 w-full'>
          <div className='w-full'>
            {basket.map(item => (
              <BasketCartItem item={item} key={item.id}/>
            ))}
          </div>
          <div className='flex justify-center items-center flex-col gap-2 border rounded-sm p-2 w-[300px] h-[200px]'>
            <div className='flex justify-center items-center gap-1 flex-col border-b mb-1'>
            <Typography className='text-orange-500 font-semibold'>
              All products : {basket.length}
            </Typography>
            <Typography className='text-blue-500 font-bold text-[15px]'>
              All products price : {price}$
            </Typography>
            </div>
          <Button color='blue' size='sm' className='rounded-sm mt-4'>
            Order 
          </Button>
          </div>
        </div> :
      <div className='h-[70vh] w-full flex flex-col gap-2 justify-center items-center'>
        <BsFillBasketFill className='text-[20px]'/>
        <Typography className='text-18px text-bold'>
          Basket product not found!
        </Typography>
      </div>
    }
    </div>
  )
}

export default Basket
