import '../styles/App.css';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

import Navbar from './components/Navbar';

export default function Login() {
  
function inin() {
  sessionStorage.setItem("login", true)
  // console.log('inin')
}
function otot() {
  sessionStorage.setItem("login", false)
  // console.log('otot')
}

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
      
        <div className="">
          This is 'Login' page
        </div>
        <button onClick={otot}><Link to='/'>Logout</Link></button>
        <button onClick={inin}><Link to='/'>Login</Link></button>
      </div>
    </div>
  );
}
