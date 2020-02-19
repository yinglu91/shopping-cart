import React from 'react';
import Header from './components/Header';
import Products from './components/products/Products';
import './App.css';

const products = [
  {
    id: 1,
    name: 'mango',
    price: 3
  },
  {
    id: 2,
    name: 'banana',
    price: 5.25
  }
];

function App() {
  return (
    <div>
      <Header />

      <Products products={products} />
    </div>
  );
}

export default App;
