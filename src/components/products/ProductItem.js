import React from 'react';

const ProductItem = props => {
  const { product } = props;
  return (
    <div>
      {product.name} - ${product.price}
    </div>
  );
};

export default ProductItem;
