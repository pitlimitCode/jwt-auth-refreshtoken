import '../styles/App.css';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";

import Navbar from './components/Navbar';

export default function Login() {
  const strg = sessionStorage
  const isLogin = strg.getItem('login');
  let nav;
  if (isLogin === 'false'){
    nav = 
      {
        navleft: {
          path: '/',
          name: 'Home'
        },
        navright: {
          path: '/login',
          name: ''
        }
      }
  } else {
    return <Navigate to="/" />;
  }

  function handleLogin() {
    sessionStorage.setItem("login", true)
  }

  return (
    <div className="App">
    <Navbar send={{nav, isLogin}} />
      <div className='container'>

        <div className="flexcenter">
          This is 'Login' page
        </div>

        <button onClick={handleLogin}><Link to='/'>Login</Link></button>
      </div>
    </div>
  );
}
