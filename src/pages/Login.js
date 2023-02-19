import '../styles/App.css';
// import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";

import Navbar from './components/Navbar';

export default function Login() {
  const strg = sessionStorage;
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

  // function handleLogin() {
  //   sessionStorage.setItem("login", true)
  // }

  return (
    <div className="App">
    <Navbar send={{nav, isLogin}} />
      <div className='container'>

        {/* <div className="flexcenter">
          This is 'Login' page
        </div> */}

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          // alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'cyan',
          color: 'darkBlue',
          minHeight: '70vh',
          // padding: '2rem',
        }}>
          <div style={{
            backgroundColor: 'green',
            color: 'red',
            flex: '50%',
            margin: '3rem',
          }}>
            tes1
          </div>
          <div style={{
            backgroundColor: 'green',
            color: 'red',
            flex: '50%',
            margin: '3rem',
            border: '0.3rem solid red',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{paddingBottom: '4rem'}}>login</div>
            <div>
              <form>
                {/* <div style={{paddingBottom: '2rem'}}> */}
                  <label>
                    <input type="text" />
                  </label>
                {/* </div> */}
                {/* <div style={{paddingBottom: '2rem'}}>
                  Input
                </div> */}
              </form>
            </div>
          </div>
        </div>

        {/* <button onClick={handleLogin}><Link to='/'>Login</Link></button> */}

      </div>
    </div>
  );
}
