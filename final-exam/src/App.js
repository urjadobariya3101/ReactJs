import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { GET_PRODUCT_PROGRESS } from './redux-saga/admin/action/action';
import Data from './Components/Data';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:GET_PRODUCT_PROGRESS})
  },[])
  
  return (
    <div className="App">
      <Data/>
    </div>
  );
}

export default App;
