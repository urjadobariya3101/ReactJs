import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

export const Home = () => {
  const fname = useRef();
  const lname = useRef();
  const age = useRef();

  const [result, setresult] = useState();
  const [view, setview] = useState({});
  const [index, setindex] = useState();

  const arr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  const addData = () => {
    const result = {
      fname: fname.current.value,
      lname: lname.current.value,
      age: age.current.value,
    };

    arr.push(result);
    localStorage.setItem("data", JSON.stringify(arr));

    console.log([...arr]);

    setresult(arr);

    Swal.fire({
      title: "Good job!",
      text: "Your data is succesfully added!",
      icon: "success",
    });

    fname.current.value = "";
    lname.current.value = "";
    age.current.value = "";
  };

  const handleDelete = (ind) => {
    console.log(ind);

    arr.splice(ind, 1);
    localStorage.setItem("data", JSON.stringify(arr));
    setresult(arr);

    Swal.fire({
      title: "Oops!",
      text: "Your data is succesfully deleted!",
      icon: "success",
    });
  };

  const View = (ind) => {
    setview(arr[ind]);
    setindex(ind);
  };

  const update_data = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };

  const update_handler = () => {
    if (view.fname !== "") {
      arr.splice(index, 1, view);
      localStorage.setItem("data", JSON.stringify(arr));
      setresult([...arr]);
    }
    Swal.fire({
      title: "Good yeyy!",
      text: "Your data is succesfully updated!",
      icon: "success",
    });
  };

  useEffect(() => {
    setresult(arr);
  }, []);

  return (
    <div>
      <div>
        <label>First Name : </label>
        <input type="text" name="fname" ref={fname} />
        <br />
        <label>Last Name : </label>
        <input type="text" name="lname" ref={lname} />
        <br />
        <label>Age : </label>
        <input type="number" name="age" ref={age} />
        <br />
        <button className="btn btn-info" onClick={addData}>
          Add
        </button>
      </div>

      <div>
        <label>First Name : </label>
        <input
          type="text"
          name="fname"
          value={view.fname}
          onChange={update_data}
        />
        <br />
        <label>Last Name : </label>
        <input
          type="text"
          name="lname"
          value={view.lname}
          onChange={update_data}
        />
        <br />
        <label>Age : </label>
        <input
          type="number"
          name="age"
          value={view.age}
          onChange={update_data}
        />
        <br />
        <button className="btn btn-info" onClick={update_handler}>
          Update
        </button>
      </div>

      <div>
        {result?.map((val, ind) => {
          return (
            <div key={ind}>
              <h1>{val.id}</h1>
              <h1>{val.fname}</h1>
              <h1>{val.lname}</h1>
              <h1>{val.age}</h1>
              <button
                className="btn btn-info"
                onClick={() => handleDelete(ind)}
              >
                Delete
              </button>
              <button className="btn btn-info ml-5" onClick={() => View(ind)}>
                View
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
