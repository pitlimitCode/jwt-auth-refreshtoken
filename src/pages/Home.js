import '../styles/App.css';
// import { Link } from 'react-router-dom';
// import { Navigate } from "react-router-dom";

import Navbar from './components/Navbar';

export default function Home() {
  const strg = sessionStorage;
  if(strg.getItem('login') == null){
    strg.setItem('login', false);
  }
  const isLogin = strg.getItem('login');
  let nav;
  if (isLogin === 'true'){
    nav = 
      {
        navleft: {
          path: '/profile',
          name: 'Profile'
        },
        navright: {
          path: '/login',
          name: 'Logout'
        }
      }
  } else {
    nav = 
    {
      navleft: {
        path: '/profile',
        name: ''
      },
      navright: {
        path: '/login',
        name: 'Register / Login'
      }
    }
  }

  return (
    <div className="App">
      <Navbar send={{nav, isLogin}} />
      <div className='container'>

        <div className="flexcenter">
          This is 'Home' page
        </div>

      </div>
    </div>
  );
}
