
import { Navigate, Link } from "react-router-dom";
import { useState } from 'react';

import Navbar from './components/Navbar';

export default function Login() {
  const [nameeLog, setNameeLog] = useState("");
  const [passLog, setPassLog] = useState("");
  const [nameeReg, setNameeReg] = useState("");
  const [passReg, setPassReg] = useState("");
  
  // useEffect(() => {
    
  // }, [namee, pass])
  
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(`register: ${nameeReg}, ${passReg}`);
  }
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`login: ${nameeLog}, ${passLog}`);
  }
  const loginTrue = () => {
    sessionStorage.setItem('login', 'true')
  }

  const isLogin = sessionStorage.getItem('login');
  let nav;
  if (isLogin === 'true'){
    return <Navigate to="/profile" />;
  } else {
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
  }
  
  return (
  <div className="App">
    <Navbar send={{nav, isLogin}} />
    <div className='container'>
      <div className='log-reg'>

        <div className='log-reg-box'>
          <form onSubmit={handleRegister}>
            <div style={{paddingBottom: '1rem'}}>
              <input 
                type="text"
                placeholder='Name'
                value={nameeReg}
                onChange={(e) => setNameeReg(e.target.value)}
              />
            </div>
            <div style={{paddingBottom: '1rem'}}>
              <input 
                type="text"
                placeholder='Password'
                value={passReg}
                onChange={(e) => setPassReg(e.target.value)}
              />
            </div>
            <div className='button-log-reg-box'>
              <input type='submit' value='Register'/>
            </div>  
            {/* <div onClick={handleRegsiter}> Register </div> */}
          </form>
        </div>
        
        <div className='log-reg-box'>
          <form onSubmit={handleLogin}>
            <div style={{paddingBottom: '1rem'}}>
              <input 
                type="text"
                placeholder='Name'
                value={nameeLog}
                onChange={(e) => setNameeLog(e.target.value)}
              />
            </div>
            <div style={{paddingBottom: '1rem'}}>
              <input 
                type="text"
                placeholder='Password'
                value={passLog}
                onChange={(e) => setPassLog(e.target.value)}
              />
            </div>

            {/* Button Login: Make to login true on Session Storage */}
            <div
              className='button-log-reg-box'
              onClick={loginTrue}
            > Session Storage Login = True </div>

            {/* Button Login: To '/' Page */}
            <div className='button-log-reg-box'>
              <button 
                style={{
                  backgroundColor: 'transparent', 
                  borderColor: 'transparent',
                }}
              ><Link to='/'> To Home Page </Link></button>
            </div>
            
            {/* Button Login: .... */}
            <div className='button-log-reg-box'>
              <input type='submit' value='Login'/>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
  );
}
