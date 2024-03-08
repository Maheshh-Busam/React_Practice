import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './ContextProvider';

function FetchApiFromOnline() {
  const { cart, setCart, count, setCount } = useContext(Context);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  const filteredProducts = data.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCartHandler = (product) => {
    setCart([...cart, product]);
    setCount(count + 1);
  }

  return (
    <>
      <header>Fetching Products from Fake API Online web site</header>
      <h1>Cart Count : {count}</h1>
      <Link to='/normalcart'><button style={{backgroundColor :'green', color: 'white'}}>Cart Online</button></Link>

      <input
        className='search-bar'
        type="text"
        placeholder='Search Product..'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <div className="container">
        {
          filteredProducts.map(
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
                  <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
                  <button>Buy</button>
                </div>
              </div>
          )
        }
      </div>
    </>
  )
}

export default FetchApiFromOnline;
