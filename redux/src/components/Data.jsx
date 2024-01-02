import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS } from "../redux-saga/admin/action/action";

const Data = () => {
  const name = useRef();
  const price = useRef();
  const product = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  // post data
  const handleSubmit = () => {
    const data = {
      productName: name.current.value,
      price: price.current.value,
    };

    dispatch({ type: POST_PRODUCT_PROGRESS, payload: data });
    name.current.value = "";
    price.current.value = "";

    console.log(data);
  };

  // delete data
  const handleDelete = (val) => {
    console.log(val);
    dispatch({type: DELETE_PRODUCT_PROGRESS})
  }

  // update data
  const handleView = (val) => {
    console.log(val);
  }

  return (
    <>
      <input type="text" ref={name} />
      <input type="number" ref={price} />
      <br />
      <button className="btn btn-info mt-3" onClick={handleSubmit}>
        Add
      </button>

      <div className="container">
        <div className="row">
          {product.product?.map((val, ind) => {
            return (
              <React.Fragment key={ind}>
                <div className="card col-md-3 m-2" style={{ width: `18rem` }}>
                  <div className="card-body">
                    <h5 className="card-title">{val.id}</h5>
                    <p className="card-text">{val.productName}</p>
                    <p className="card-text">{val.price}</p>
                    <button className="btn btn-info" onClick={()=>handleDelete(val)}>Delete</button>
                    <button className="btn btn-info m-3" onClick={()=>handleView(val)}>View</button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Data;
