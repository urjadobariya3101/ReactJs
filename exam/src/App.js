import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [updatedata, setUpdatedata] = useState({});

  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();

  const getData = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      console.log(res);
      setData(res.data || []);
    });
  };

  const addData = () => {
    const result = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
    };

    axios.post("http://localhost:3001/posts", result).then((res) => {
      console.log(res.data);
      setData([...data, res.data]);
      firstName.current.value = "";
      lastName.current.value = "";
      age.current.value = "";
    });
  };

  const deleteData = (id, ind) => {
    console.log(id);
    console.log(ind);

    axios.delete(`http://localhost:3001/posts/${id}`).then((res) => {
      setData(data.splice(0, ind));
    });
  };

  const updateData = (id, ind_) => {
    const old_data = data[ind_];
    setUpdatedata(old_data);
    console.log(old_data);
  };

  const final = (e) => {
    setUpdatedata({ ...updatedata, [e.target.name]: e.target.value });
  };

  const finalUpdate = () => {
    axios
      .put(`http://localhost:3001/posts/${updatedata.id}`, updatedata)
      .then((res) => {
        console.log(res, "update data");
      });
      firstName.current.value = "";
      lastName.current.value = "";
      age.current.value = "";
      getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div>
        <input type="text" name="firstName" ref={firstName} />
        <input type="text" name="lastName" ref={lastName} />
        <input type="number" name="age" ref={age} />
        <button onClick={addData}>Add</button>
      </div>

      <div>
        <input
          type="text"
          name="firstName"
          value={updatedata.firstName}
          onChange={final}
        />
        <input
          type="text"
          name="lastName"
          value={updatedata.lastName}
          onChange={final}
        />
        <input
          type="number"
          name="age"
          value={updatedata.age}
          onChange={final}
        />
        <button onClick={finalUpdate}>Update</button>
        <button>Cancel</button>
      </div>

      {data?.map((val, ind) => (
        <div key={ind}>
          <h3>First Name : {val.firstName}</h3>
          <h3>Last Name : {val.lastName}</h3>
          <h3>Age : {val.age}</h3>
          <button onClick={() => deleteData(val.id, ind)}>Delete</button>
          <button onClick={() => updateData(val.id, ind)}>View</button>
        </div>
      ))}
    </div>
  );
}

export default App;
