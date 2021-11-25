import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './components/products.json'
import { Product } from './components/Product'
import { Header } from './components/header'
import './index.css';
import { useState } from 'react'

//todo: NavBar, Footer and ShoppingCart

function App() {
  const [cart, setCart] = useState(data.cart)

  const addToCart = product => {

    if (product.addedToCart) {
      product.quantity += 1
    }
    else {
      product.addedToCart = true
      product.quantity = 1
      setCart([...cart, product])
    }
  }

  console.log(cart)
  return (
    <div className="App">
      <Header/>
      {data.products.map(product => <Product product={product} cart={cart} addToCart={addToCart} />)}
    </div>
  );
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
