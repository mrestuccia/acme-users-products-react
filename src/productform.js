import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super();
    this.state = { name: '' };

    this.onNameChange = this.onNameChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onProductSave = props.onProductSave; // store locally the parent function
  }

  onNameChange(ev) {
    this.setState({ name: ev.target.value });
  }

  onButtonClick(ev){
    ev.preventDefault(); //prevent default
    this.onProductSave(this.state.name); // call the parent function
    this.setState({ name: '' });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" value={this.state.name} onChange={ this.onNameChange } />
        </div>
        <button className="btn btn-primary" onClick={this.onButtonClick }>Save</button>
      </form>
    );
  }
}

export default ProductForm;