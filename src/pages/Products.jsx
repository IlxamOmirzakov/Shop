import { FaShoppingCart } from "react-icons/fa";  
import React, { useEffect } from 'react'
import ProductCartItem from '../components/ProductCartItem'
import { getCategories, getProduct } from '../getData/getAxiosData'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCardItem from '../components/CategoryCardItem'
import { Card, CardBody, Spinner, Typography } from '@material-tailwind/react'
import { setSelectProduct } from "../redusers/product.slice";

const Products = () => {

  const {products, isLoading:isProduct, selectProducts} = useSelector(state => state.product) 
  const {categories, isLoading:isCategory} = useSelector(state => state.category) 


  const dispatch = useDispatch()
  useEffect(() => {
    getProduct('https://online-dashboard-vw07.onrender.com/products', dispatch)
    getCategories('https://online-dashboard-vw07.onrender.com/categories', dispatch)
  },[])
  return (




    <div className='flex justify-center flex-col'>
      <div className='flex justify-start p-[10px] items-center gap-2 overflow-x-auto px-s min-h-[80px] border my-3'>
        {isCategory? 
        <div className='flex items-center gap-2'>
          <Spinner color='blue'/> Loading...
        </div> : 
        <>
          <Card onClick={() => dispatch(setSelectProduct([]))} className="rounded-sm border active:scale-95 cursor-pointer">
            <CardBody className="flex justify-center items-center gap-2 max-h-[60px] min-w-[200px] p-[7px]">
              <div className="w-[40px] h-[40px] rounded-sm flex justify-center items-center">
                <FaShoppingCart className="text-[18px]"/>
              </div>
              <Typography>All Products</Typography>
            </CardBody>
          </Card>
          
            {categories.map(item => (
            <CategoryCardItem item={item} key={item.id}/>
            ))}
          
        </>
        } 
      </div>
      <div className="flex sm:justify-center md:justify-start">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-3'>
          {isProduct? 
          <div className='flex items-center gap-2'>
          <Spinner color='blue'/> Loading...
          </div> : 
            selectProducts.length > 0 ? 
              selectProducts.map(item => (
                <ProductCartItem item={item} key={item.id}/>
              )) :
              products.map(item => (
                <ProductCartItem item={item} key={item.id}/>
              ))
          }
      </div> 
      </div>
    </div>
  )
}

export default Products
