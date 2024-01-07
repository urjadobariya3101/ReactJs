import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from "../redux-saga/admin/action/action";
import Swal from "sweetalert2";

const Data = () => {
  const name = useRef();
  const price = useRef();
  const product = useSelector((state) => state.productReducer);

  const [view, setView] = useState({});

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

    Swal.fire({
      title: "Good job!",
      text: "Data added successfully!",
      icon: "success"
    });
  };

  // delete data
  const handleDelete = (val) => {
    console.log(val);
    dispatch({type: DELETE_PRODUCT_PROGRESS, payload: val})
  }

  // update data
  const handleView = (val) => {
    console.log(val);
    setView(val);
  }

  const handle = (e) => {
    setView({...view,[e.target.name]:e.target.value})
  }

  const handleUpdate = () => {
    dispatch({type:PUT_PRODUCT_PROGRESS, payload:view})
    // Swal.fire({
    //   title: "Do you want to save the changes?",
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: "Save",
    //   denyButtonText: `Don't save`
    // })
    // .then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     Swal.fire("Saved!", "", "success");
    //   } else if (result.isDenied) {
    //     Swal.fire("Changes are not saved", "", "info");
    //   }
    // });
  }

  return (
    <>
      <input type="text" ref={name} />
      <input type="number" ref={price} />
      <br />
      <button className="btn btn-info mt-3 mb-3" onClick={handleSubmit}>
        Add
      </button>
      <br />

      <input type="text" name="productName" value={view.productName} onChange={handle}/>
      <input type="number" name="price" value={view.price} onChange={handle}/>
      <br />
      <button className="btn btn-info mt-3" onClick={handleUpdate}>
        Update
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
