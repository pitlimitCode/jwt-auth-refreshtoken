import Navbar from './components/Navbar';
// import Countdown from './components/Countdown';

import { Navigate } from "react-router-dom";
// import { useState } from 'react';

export default function Profile(props) {
  const userDatas2 = sessionStorage.getItem('users');
  const userDatas = JSON.parse(userDatas2);
  const aktiv = sessionStorage.getItem('activeUser');
  
  let activeUser = {};
  for (var i = 0; i < userDatas.length; i++) {
    if (userDatas[i]['namee'] === aktiv) {
      activeUser = userDatas[i];
      activeUser.expired = sessionStorage.getItem('tokenExpired')
    }
  }
  
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
    <Navbar send={{nav, isLogin, cd: props.cd}} />
      <div className='container'>
      
        <div className="flexcenter">
          <div type='button'
            onClick={props.buttonCd}
            style={{
              border: '2px solid var(--color2)',
              marginLeft: '2px',
              padding: '0 3px 2px 3px',
              cursor: 'pointer',
            }}
            > Refresh Token </div>
        </div>
        <br/>

        <div className="flexcenter">Your User Data :</div>
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
