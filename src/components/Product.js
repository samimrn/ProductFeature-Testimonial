import React, { useState } from 'react'
import { Figure } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
import { VscHeart } from 'react-icons/vsc'
import { useStateValue } from './StateProvider'

function Product({id, image, title, prices,quantity}) {
  const [{basket}, dispatch] = useStateValue();
  
  // console.log("this is the basket", basket)

  const addToBasket = () => {
     //dispatch the item into the datalayer
    dispatch({
      type:"ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        prices: prices,
        quantity: quantity,
      },
    });
  };
  return (
    <div>
      <Figure className='mb-45'>
        <img className='img-fluid product-img product-img' src={image}></img>
            <div class="middle">
                <div class="image-hover-icon"><VscHeart/></div>
                <div onClick={addToBasket} class="image-hover-icon"><BsCartPlus/></div>
                <div class="image-hover-icon"><AiOutlineSearch/></div>
            </div>
        </Figure> 
        <p className='product-info center'>
            <h5>{title}</h5>
            <span>${prices}</span>
        </p>
    </div>
  )
}

export default Product
