import Navbar from './components/Navbar';

import { Navigate } from "react-router-dom";
// import { useState } from 'react';

export default function Profile() {
  // const [activeUser, setActiveUser] = useState(null);
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

  const userDatas2 = sessionStorage.getItem('users');
  const userDatas = JSON.parse(userDatas2);
  const aktiv = sessionStorage.getItem('activeUser');
  
  let activeUser = {};
  for (var i = 0; i < userDatas.length; i++) {
    if (userDatas[i]['namee'] === aktiv) {
      activeUser = userDatas[i]
    }
  }

  return (
    <div className="App">
    <Navbar send={{nav, isLogin}} />
      <div className='container'>

        <div className="flexcenter">
          <pre style={{ display: 'block' }}>
            <code>
              {JSON.stringify(activeUser, null, 2)}
            </code>
          </pre>
        </div>

      </div>
    </div>
  );
}
