import React from 'react';
import './App.css';
import FetchApiFromJson from './FetchApiFromJson';
import FetchApiFromOnline from './FetchApiFromOnline';
import { CartProvider } from './CartReducer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import NormalCart from './NormalCart';
import { ContextProvider } from './ContextProvider';

function App() {
  return (
    <CartProvider>
      <ContextProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <FetchApiFromJson />
                  <FetchApiFromOnline />
                </React.Fragment>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/normalcart" element={<NormalCart />} />
          </Routes>
        </Router>
      </ContextProvider>
    </CartProvider>
  );
}

export default App;
