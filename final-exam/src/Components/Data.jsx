import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { POST_PRODUCT_PROGRESS } from '../redux-saga/admin/action/action';

const Data = () => {

    const productName = useRef();
    const price = useRef();

    const product = useSelector((state)=>state.productReducer);

    const dispatch = useDispatch();

    // post data
    const handleSubmit = () => {
        const data = {
            productName : productName.current.value,
            price : price.current.value
        }

        dispatch({type:POST_PRODUCT_PROGRESS, payload : data})
        productName.current.value = "";
        price.current.value = "";
    }


  return (
    <>
        <label>Product Name:</label>
        <input type='text' name='productName' ref={productName}/>
        <br/>
        <label>Price:</label>
        <input type='number' name='number' ref={price}/>
        <br/>
        <button className='btn btn-info m-3' onClick={handleSubmit}>Add</button>

        <div className="container">
        <div className="row">
          {product.product?.map((val, ind) => {
            return (
              <React.Fragment key={ind}>
                <div className="card col-md-2 m-2" style={{ width: `18rem` }}>
                  <div className="card-body">
                    <p className="card-text">{val.id}</p>
                    <p className="card-text">{val.productName}</p>
                    <p className="card-text">{val.price}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Data;
