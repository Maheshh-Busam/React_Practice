import React from 'react';
import './FetchApiFromJson.css';
import products from './products.json'; //We have already a json file of objects, we can import that and map that..
import { useCart } from './CartReducer';
import { Link } from 'react-router-dom';

function FetchApiFromJson() {

  const { state, dispatch } = useCart();


  const handleAddToCart =(product) => {
    console.log('Adding to cart:', product);
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  console.log('Cart:', state.cart);
  console.log('Count:', state.count);


  return (
    <>
    <header>Fetching Products from Local Json file </header><h1>Cart : {state.count}</h1><Link to='/cart'><button style={{backgroundColor: 'green', color: 'white'}}>Go to Cart</button></Link>
    <div className="container">
    {
        products.map( 
          product =>
            <div className='product-item' key={product.id}>
              <img src={product.image} alt="Image" />
              <h3 className='title'>{product.title}</h3>
              <div className='price'>
                <h4>Price:</h4><h4> {product.price}$</h4>
              </div>
              <div className='rating'>
                <h4>Rating:</h4><h4>{product.rating.rate}/5</h4>
              </div>
              <div className='btns'>
                <button onClick={() => handleAddToCart(product)} >Add to Cart</button>
                <button >Buy</button>
              </div>
            </div>
        )
      }
    </div>
      
    </>
  )
}

export default FetchApiFromJson
