import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav';

const root = document.getElementById('root');

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'Product',
      products: [],
      users: [],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(view){
    this.setState({ view: view });
  }

  render() {
    //Load the View
    let view;
    if (this.state.view === 'Product') {
      view = 'Product';
    } else {
      view = 'User';
    }

    return (
      <div className="container">
        <Nav users={this.state.users} products={this.state.products} onClick={this.onClick} />
        {view}
      </div>
    );
  }
}

ReactDOM.render(<App />, root);
