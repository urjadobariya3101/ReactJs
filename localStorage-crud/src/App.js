import { Route, Routes } from "react-router-dom";
import "./App.css";
import { adminNav } from "./components/Admin/Header/adminNav";
import { userNav } from "./components/User/Header/userNav";
import { Navbar } from "./components/Atoms/Header/Navbar";
import { Home } from "./components/User/Pages/Home";
import { AdminHome } from "./components/Admin/Pages/AdminHome";
import { Product } from "./components/User/Pages/Product";
import { List } from "./components/Admin/Pages/List";

function App() {
  const role = "user";

  if (role === "admin") {
    return (
      <div className="App">
        <div>
          <Navbar data={adminNav} />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/product" element={<List />} />
          </Routes>
        </div>
      </div>
    );
  } else if (role === "user") {
    return (
      <div className="App">
        <div>
          <Navbar data={userNav} />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
