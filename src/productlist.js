import React from 'react';
import ProductListItem from './productlistitem';

const ProductList = ({ products, onDelete }) => {
  return (
    <ul className="list-group">
      {
        products.map(product => (<ProductListItem key={product.id} product={ product } onDelete={ onDelete } />))
      }
    </ul>
  );
};

export default ProductList;
