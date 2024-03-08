import React, { useContext } from 'react';
import { Context } from './ContextProvider';

function NormalCart() {
    const { cart, count } = useContext(Context);

    return (
        <div className='cart'>
            <h1>Cart : {count}</h1>
            <div className="cart-items">
                {cart.map((product) => (
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

export default NormalCart;
