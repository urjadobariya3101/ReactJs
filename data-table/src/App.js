import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control bg-dark text-white"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Contact"
        />
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((val) => {
              return search.toLowerCase() === ''
                ? val
                : val.first_name.toLowerCase().includes(search);
            })
            .map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;
