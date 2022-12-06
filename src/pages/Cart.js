import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import { getBasketTotal } from '../components/reducer';
import { useStateValue } from '../components/StateProvider';

const Cart = () => {
  // const [show, setShow] = useState(true);
 
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='cart'>
      <div class="banner">
        <img src="images/bg.jpg" alt=""/>
        <div class="bg-image">
          <div class="container">
            <div className='contact-topic'>
              <h2>Cart</h2>
            </div>
            <div class="breadcrumb-menu">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active"><a href='#'>Cart</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='cart-item'>
      {basket.map(item => ( 
            <CartProduct
              id={item.id}
              image={item.image}
              title={item.title}
              prices={item.prices}
              quantity={item.quantity}
            />
          ) )}
      </div>

      <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal {basket.length} items: <br/><span>{value}</span>
                    </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
      </div>

      <div className='checkout-btn'>
        <Link to='/checkout'>
          <button>Add to Checkout</button>
        </Link>
      </div>

    </div>
  )
}

export default Cart
