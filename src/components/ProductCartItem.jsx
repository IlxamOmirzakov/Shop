import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteItem } from "../redusers/favorite.slice";
import { setBasketItem } from "../redusers/basket.slice";

const ProductCartItem = ({item}) => {
    const dispatch = useDispatch()
    const {favorite} = useSelector(state => state.favorite)
    const [LikeActive, setLike] = useState(favorite.find(favItem => favItem.id == item.id)? true : false)
 
  return (
    <div>
        <Card className="max-w-[350px] flex justify-between group gap-3 cursor-pointer flex-col border rounded-sm">
        <CardBody className='p-[15px]'>
            <div className="overflow-hidden rounded-sm border">
                <img
                src={item.image}
                alt="card-image"
                className="h-full w-full min-w-[200px] object-contain p-3 max-h-[200px] overflow-hidden transition duration-300 group-hover:scale-110"
                />
            </div>
            <div className="absolute top-2 right-2">
                <IconButton onClick={() => (dispatch(setFavoriteItem(item)),(setLike(!LikeActive)))} variant="outlined" color="white" size="sm" className="rounded-full bg-black bg-opacity-20">
                    {LikeActive? <AiFillHeart className="text-[18px] text-[red]"/> : <AiOutlineHeart className="text-[18px]"/>}
                </IconButton>
            </div>
            <div className="flex flex-col justify-between mt-2">
            <Typography color="blue-gray" className="font-semibold text-[15px] text-gray-800">
                {item.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
                price : {item.price}$
            </Typography>
            </div>
        </CardBody>
        <CardFooter className="p=[15px]">
            <Button
            ripple={false}
            size="sm"
            onClick={() => dispatch(setBasketItem(item))}
            className="bg-blue-600 float-right rounded-sm text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
            Add to Cart
            </Button>
        </CardFooter>
        </Card>
    </div>
  )
}

export default ProductCartItem
