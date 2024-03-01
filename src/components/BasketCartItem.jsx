import { AiOutlineClose } from "react-icons/ai"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import { AiOutlineMinus } from "react-icons/ai"; 
import { AiOutlineMinusCircle } from "react-icons/ai"; 
import { AiOutlinePlusCircle } from "react-icons/ai"; 
import { IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { DecrementCountItem, deleteBasketItem, setBasketItem } from "../redusers/basket.slice";

const BasketCartItem = ({item}) => {
  const dispatch = useDispatch()
  const {countBasketItem} = useSelector(state => state.basket)

  const count = countBasketItem.filter(countItem => countItem.id === item.id).length
  return (
    <div className='relative flex justify-between items-center gap-2 p-[10px] border my-2 shadow-md'> 
      <div  className='flex justify-center items-center gap-2'>
        <img className='w-[200px] h-[150px] object-contain border rounded-sm' src={item.image} alt="" />
        <div>
            <Typography className='font-bold'>
                {item.title}
            </Typography>
            <Typography>
                price : {item.price}$
            </Typography>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-1 rounded-full p-2">
            <IconButton onClick={() => count > 1? dispatch(DecrementCountItem(item)) : '' } variant="outlined" size="sm" color="blue" className="rounded-full">
                <AiOutlineMinus />
            </IconButton>
            <span>{count}</span>
            <IconButton variant="outlined" size="sm" color="blue" className="rounded-full">
                <AiOutlinePlus onClick={() => dispatch(setBasketItem(item))}/>
            </IconButton>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton onClick={() => dispatch(deleteBasketItem(item))} className="rounded-md" size="sm" variant="text">
            <AiOutlineClose className="text-[18px]"/>
        </IconButton>
      </div>
    </div>
  )
}

export default BasketCartItem
