import React from 'react';
import ProductItem from './ProductItem';

const Products = props => {
  return (
    <>
      {props.products.map(product => (
        <ProductItem product={product} />
      ))}
    </>
  );
};

export default Products;
