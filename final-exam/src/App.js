import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { GET_PRODUCT_PROGRESS } from "./redux-saga/admin/action/action";
import Admin from "./Components/Admin";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import  User from "./Components/User";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Admin />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
