import { useState } from 'react';
import './App.css';

function App() {
  const [num,setnum] = useState(0);

  const add = () => {
    setnum(num + 1);
  }

  const sub = () => {
    setnum(num - 1);
  }

  return ( 
    <div className="App">
      <h1>{num}</h1>
      <button onClick={add} className='btn btn-info m-5'>Addition</button>
      <button onClick={sub} className='btn btn-info m-5'>Subtraction</button>
    </div>
  );
}

export default App;
