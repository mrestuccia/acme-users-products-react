import React from 'react';

const ProductList = ({ products, onDelete }) => {

  const buttonStyle = {
    float: 'right'
  };

  const brStyle = {
    clear: 'both'
  }

  return (
    <ul className="list-group">
      {
        products.map((product) => {
          return (
            <li key={product.id} className="list-group-item">{product.name}
              <button className="btn btn-warning" style={buttonStyle} onClick={ () => onDelete(product) }>Delete</button>
              <br style={brStyle} />
            </li>
          );
        })
      }
    </ul>
  );
};

export default ProductList;
