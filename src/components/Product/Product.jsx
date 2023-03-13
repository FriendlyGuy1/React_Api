import style from "./Product.module.css"

import React from 'react'

const Product = (props) => {

  return (
    <div className={style.list}>
        {
            props.items.products?.map(item =>{
                return(
                    <div key={item.id} className={style.item}>
                        <h2 className={style.title}> {item?.title || "Title not found"}</h2>
                        <h3>Category: {item?.category || "category not found"}</h3>
                        <h3>Brand: {item?.brand || "brand not found"}</h3>
                        <img src={item?.thumbnail || "Picture not found"} alt="" className={style.thumbnail}/>
                        <p className={style.description}> {item?.description || "Description not found"}</p>
                        <h4>Price: {item?.price || "Price not found"} €</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product