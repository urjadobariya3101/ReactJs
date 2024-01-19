import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const product = useSelector((state) => state.productReducer);

  return (
    <>
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
  );
};

export default User;
