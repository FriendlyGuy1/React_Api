import {  useEffect, useState } from 'react'

import productsService from '../../services/productsService'
// import style from "./ProductsList.module.css"

import Product from '../Product/Product'

const ProductsList = () => {

  const [products, setProducts] = useState([])

  const getProducts = ()=> {
      productsService().then((res)=> {
        setProducts(res)
      })
  }

  useEffect(()=>{
    getProducts()
  }, [])

  console.log(products)

  return (
    <div>
        <Product items={products}/>
    </div>
  )
}

export default ProductsList