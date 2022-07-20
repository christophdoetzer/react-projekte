import React from 'react';
import  {Link, Outlet} from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
