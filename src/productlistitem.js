import React from 'react';

const ProductListItem = ({ product, onDelete }) => {

  const buttonStyle = {
    float: 'right'
  };

  const brStyle = {
    clear: 'both'
  }

  return (
    <li key={product.id} className="list-group-item">{product.name}
      <button className="btn btn-warning" style={buttonStyle} onClick={ () => onDelete(product) }>Delete</button>
      <br style={brStyle} />
    </li>
  );
};

export default ProductListItem;
