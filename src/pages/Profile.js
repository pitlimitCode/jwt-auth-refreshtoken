
import { Navigate } from "react-router-dom";

import Navbar from './components/Navbar';

export default function Profile() {
  const isLogin = sessionStorage.getItem('login');
  let nav;
  if (isLogin === 'true'){
    nav = 
      {
        navleft: {
          path: '/',
          name: 'Home'
        },
        navright: {
          path: '/login',
          name: 'Logout'
        }
      }
  } else {
    return <Navigate to="/login" />;
  }

  return (
    <div className="App">
    <Navbar send={{nav, isLogin}} />
      <div className='container'>

        <div className="flexcenter">
          This is 'Profile' page
        </div>

      </div>
    </div>
  );
}
