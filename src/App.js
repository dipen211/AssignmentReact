import React from 'react';
import './App.css';
import LoginForm from './component/Login/Login';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
    <div className="App">
      <LoginForm />
    </div>
    </BrowserRouter>
  );
}

export default App;
