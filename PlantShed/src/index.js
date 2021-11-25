import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './components/products.json'
import { Product } from './components/Product'
import './index.css';

ReactDOM.render(
  React.createElement("div", { style: { backgroundColor: 'blue' } }, React.createElement("h1", { style: { color: 'red' } }, "hello!"),),
  document.getElementById('root')
);

// function Hello(library, message, number) {
//   return (
//     <div>
//       <h1> Welcome To {library}!</h1>
//       <p>{message}</p>
//       <p>{number}</p>
//     </div>
//   )
// }

// function Lake({ name }) {
//   return (
//     <h1>{ name }</h1>
//   )
// }

const lakeList = ['Lake Tahoe', 'Angola Lake', 'Shirley Lake'];

// NavBar, Footer and ShoppingCart

function App() {
  return (
    <div className="App">
      { }
      {data.products.map(product => <Product key={product.productId} product={product} />)}
    </div>
  );
}

ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById('root')
);
