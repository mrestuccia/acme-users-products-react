import React from 'react';

const ProductForm = ()=>{
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" value="" />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default ProductForm;