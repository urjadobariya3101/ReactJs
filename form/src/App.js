import { useState, useEffect } from "react";
import "./App.css";
import { Data } from "./Data";
import {Model} from "./Model";

function App() {
  const [Val, setVal] = useState([]);
  const [data, setdata] = useState({});

  const handle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submit = () => {
    // console.log(data, "data");
    setVal([...Val, data]);
  };

  const handeleDelete = (name) => {
    setVal(Val.filter((e) => e.author !== name))
  }

  const view = () => {
    <Model />
  }

  useEffect(() => {
    setVal(Data);
  }, []);

  return (
    <>
      <div>
        <label>Title : </label>
        <input type="text" name="title" onChange={handle} />
      </div>

      <div>
        <label>Author : </label>
        <input type="text" name="author" onChange={handle} />
      </div>

      <div>
        <button className="btn btn-info" onClick={submit}>
          Submit
        </button>
      </div>

      <div>
        {Val?.map((v, i) => {
          return (
            <>
              <div>
                <h3>{v.title}</h3>
                <p>{v.author}</p>
                <button className="btn btn-info ml-3" onClick={() => handeleDelete(v.author)}>Delete</button>
                <button className="btn btn-info ml-3" onClick={view}>View</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
