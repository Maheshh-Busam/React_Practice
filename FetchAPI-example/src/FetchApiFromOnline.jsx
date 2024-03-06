import React from 'react'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

//   To fetch from browser Api we have to follow the below process

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return (
    <>
    <header>Fetching Products from Fake API Online web site</header>
    <div className="container">
    {
        data.map(
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

export default App
