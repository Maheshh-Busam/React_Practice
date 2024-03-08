import React from 'react';
import { useCart } from './CartReducer';
import './Cart.css';

function Cart() {
  const { state } = useCart();


  return (
    <div className='cart'>
        <h1>Cart : {state.count}</h1>
      <div className="cart-items">
        {state.cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt="Product" />
            <div>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
