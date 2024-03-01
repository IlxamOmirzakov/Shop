import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectProduct } from '../redusers/product.slice'

const CategoryCardItem = ({item}) => {

  const dispatch = useDispatch()
  const {products, selectProducts} = useSelector(state => state.product)

  return (
    <Card onClick={() => dispatch(setSelectProduct(products.filter(proItem => proItem.categoryId == item.id)))} className='cursor-pointer active:scale-95 min-w-max rounded-sm border'>  
        <CardBody className='flex justify-center items-center gap-2 max-h-[60px] min-w-[200px] p-[7px]'>
            <img src={item.image} className='w-[40px] h-[40px] rounded-sm object-cover'/>
            <Typography>
                {item.title}
            </Typography>
        </CardBody>
    </Card>
  )
}

export default CategoryCardItem
