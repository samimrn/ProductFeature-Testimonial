
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMinus, FiPlus } from 'react-icons/fi'
import '../App.css'
import { useStateValue } from './StateProvider'

function CartProduct({id, image, title, prices, quantity}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const increment = (id) =>{
        return dispatch({
            type: 'INCREMENT',
            id: id,
        })
    } 

  return (
    <div className='cartProduct mt-5'>

    <table className='table'>
        <thead>
            <tr>
                <th scope='col'></th>
                <th scope='col'>Product</th>
                <th scope='col'>Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Subtotal</th>
                <th scope='col'>Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr className='cart-item'>
                <th scope='row'><img className='img-fluid product-img' src={image}></img></th>
                <td><p>{title}</p></td>
                <td><p>{prices}</p></td>
                <td>
                    <div className='plus-minus-qty'>
                        <FiMinus/>
                        <input type='text' placeholder={quantity}/>
                        <FiPlus onClick={() => increment(id)}/>
                    </div>
                </td>
                <td>{quantity*prices}</td>
                <td onClick={removeFromBasket}><AiOutlineClose/></td>
            </tr>
        </tbody>
    </table>
    

       
        </div>


  )

}

export default CartProduct
