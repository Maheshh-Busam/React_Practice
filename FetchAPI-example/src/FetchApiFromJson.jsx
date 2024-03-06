import React from 'react';
import './FetchApiFromJson.css';
import products from './products.json'; //We have already a json file of objects, we can import that and map that..

function FetchApiFromJson() {
  return (
    <>
    <header>Fetching Products from Local Json file</header>
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
                <button >Add to Cart</button>
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
