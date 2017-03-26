import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Nav from './nav';
import UserList from './userlist';
import ProductForm from './productForm';
import ProductList from './productlist';

const root = document.getElementById('root');

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'Product',
      products: [],
      users: [],
    };

    // Context binding
    this.onClick = this.onClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onProductSave = this.onProductSave.bind(this);
  }

  componentDidMount() {
    Promise.all([
      axios.get('/api/products'),
      axios.get('/api/users')
    ])
      .then(([products, users]) => {
        this.setState({ products: products.data, users: users.data });
      });

  }

  onProductSave(name) {
    axios.post('/api/products', { name: name })
      .then((response) => {
        return response.data;
      })
      .then((product) => {
        const products = this.state.products;
        products.push(product);
        this.setState({ products: products });
      });
  }

  onClick(view) {
    this.setState({ view: view });
  }

  onDelete(product) {
    // remove the product from the state products array
    const products = this.state.products.filter(_product => _product.id !== product.id);
    this.setState({ products });

    // send the deletion to the server. this is optimistic
    axios.delete(`/api/products/${product.id}`)
      .then(() => console.log('deleted'));
  }

  render() {
    //Load the View
    let view = '';
    if (this.state.view === 'Product') {
      view = (<div>
        <h1>Products</h1>
        <ProductForm onProductSave = { this.onProductSave } />
        <ProductList products={this.state.products} onDelete={this.onDelete} />
      </div>
      );
    } else {
      view = <UserList users={this.state.users} />;
    }

    return (
      <div className="container">
        <Nav view={this.state.view} users={this.state.users} products={this.state.products} onClick={this.onClick} />
        {view}
      </div>
    );
  }
}

ReactDOM.render(<App />, root);
