import React from 'react';

const Nav = ({ view, users, products, onClick }) => {
return (
  <ul className="nav nav-tabs">
    <li role="presentation"><a href="#" onClick={() => onClick('User')}>Users ({users.length})</a></li>
    <li role="presentation" className="active"><a href="#" onClick={() => onClick('Product')}>Products ({products.length})</a></li>
  </ul>
)
};
export default Nav;
