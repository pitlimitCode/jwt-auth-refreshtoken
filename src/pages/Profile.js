import Navbar from './components/Navbar';

import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

export default function Profile(props) {
  const aktiv = sessionStorage.getItem('activeUser');
  const token = sessionStorage.getItem('token')
  const userDatas = JSON.parse(sessionStorage.getItem('users'));
  
  let activeUser = {};
  for (var i = 0; i < userDatas.length; i++) {
    if (userDatas[i]['namee'] === aktiv) {
      activeUser = userDatas[i];
      if(token === 'null') {
        activeUser._ = ''
        activeUser.message = 'SERVER-SIDE ERROR'
      } else {
        activeUser.token = `${token.substring(0, 10)}...${token.substring(token.length-10, token.length)}`;
        // activeUser.token = sessionStorage.getItem('token')
        activeUser.expired = sessionStorage.getItem('tokenExpired')
      }
    }
  }
  
  const navigate = useNavigate();

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
    // navigate("/login")
    return <Navigate to="/login" />;
  }

  const buttonCd = () => {
    axios.post('http://localhost:8000/refresh', {
      jwt: sessionStorage.getItem('token')
    })
      .then(res => {
        if (res.data.token === 'expired'){
          sessionStorage.setItem('activeUser', null)
          sessionStorage.setItem("login", 'false')
          sessionStorage.setItem('token', null)
          sessionStorage.setItem('tokenExpired', null);
          navigate("/login")
        } else {
          sessionStorage.setItem('token', res.data.token);
          sessionStorage.setItem('tokenExpired', res.data.tokenExpired);
          props.refreshCd(sessionStorage.getItem('varCdTime'))
        }
      });
  };

  return (
    <div className="App">
    <Navbar send={{nav, isLogin, cd: props.cd}} />
      <div className='container'>
      
        <div className="flexcenter">
          <div 
            type='button'
            onClick={buttonCd}
            style={{
              border: '2px solid var(--color2)',
              marginLeft: '2px',
              padding: '0.5rem',
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontWeight: 'bold',
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
