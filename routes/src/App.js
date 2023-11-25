import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Result } from './Result';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/:id" exact element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
