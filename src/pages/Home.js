import Navbar from './components/Navbar';

// import { useState } from 'react';

export default function Home() {
  // const [allUsers, setAllUsers] = useState(sessionStorage.getItem('login'));
  // const allUsers = sessionStorage.getItem('users');
  // JSON

  const userDatas = sessionStorage.getItem('users');
  const parse = JSON.parse(userDatas);

  const isLogin = sessionStorage.getItem('login');
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

        <div className="flexcenter">All Users and Password :</div>
        <br/>
        <div className="flexcenter">
          <pre style={{ display: 'block' }}>
            <code>
              {JSON.stringify(parse, null, 2)}
            </code>
          </pre>
        </div>

      </div>
    </div>
  );
}
