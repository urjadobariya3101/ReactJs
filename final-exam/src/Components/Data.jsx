import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_PRODUCT_PROGRESS } from '../redux-saga/admin/action/action';

const Data = () => {
  const productNameRef = useRef();
  const priceRef = useRef();

  const products = useSelector((state) => state.productReducer.product || []);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = {
      productName: productNameRef.current?.value || '',
      price: priceRef.current?.value || '',
    };

    dispatch({ type: POST_PRODUCT_PROGRESS, payload: data });

    // Clear input fields
    productNameRef.current.value = '';
    priceRef.current.value = '';
  };

  return (
    <>
      <label>Product Name:</label>
      <input type="text" name="productName" ref={productNameRef} />
      <br />
      <label>Price:</label>
      <input type="number" name="number" ref={priceRef} />
      <br />
      <button className="btn btn-info m-3" onClick={handleSubmit}>
        Add
      </button>

      <div className="container">
        <div className="row">
          {products.map((val, ind) => (
            <div className="card col-md-2 m-2" key={ind} style={{ width: '18rem' }}>
              <div className="card-body">
                <p className="card-text">ID: {val.id}</p>
                <p className="card-text">Name: {val.productName}</p>
                <p className="card-text">Price: {val.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Data;
