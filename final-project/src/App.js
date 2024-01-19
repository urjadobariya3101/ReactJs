import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Logout } from "./Logout";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Login />
      <Logout />
      <Profile />
    </div>
  );
}

export default App;
