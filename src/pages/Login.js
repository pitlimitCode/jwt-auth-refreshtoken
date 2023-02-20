
// import { Navigate, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from 'react';

import Navbar from './components/Navbar';

export default function Login() {
  const [nameeLog, setNameeLog] = useState("");
  const [passLog, setPassLog] = useState("");
  const [nameeReg, setNameeReg] = useState("");
  const [passReg, setPassReg] = useState("");
  const [regisDangerAlert, setRegisDangerAlert] = useState(true);
  const [regisSuccessAlert, setRegisSuccessAlert] = useState(true);
  const [hiddenButRegis, setHiddenButRegis] = useState(true);
  const [loginDangerAlert, setLoginDangerAlert] = useState(true);
  
  // useEffect(() => {
    
  // }, [namee, pass])
  
  function checkUsername(arr, key, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][key] === val) return true;
    }
    return false;
  }
  function checkAuthLogin(arr, key1, userName, key2, passWord) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][key1] === userName) {
        if (arr[i][key2] === passWord){
          return true;
        }
      }
    }
    return false;
  }
  
  // console.log(checkUsername(parse, "name", "Blofeld")); //true
  // console.log(checkUsername(parse, "weight", 22)); //true
  // console.log(checkUsername(parse, "weight", "22")); //false (or true if you change === to ==)
  // console.log(checkUsername(parse, "name", "Me")); //false

  const isLogin = sessionStorage.getItem('login');
  const userDatas = sessionStorage.getItem('users');
  
  const handleRegister = (event) => {
    event.preventDefault();
    setRegisDangerAlert(true);
    setRegisSuccessAlert(true);
    // console.log(userDatas);

    const regis = { namee: nameeReg, pass: passReg, };
    // console.log(regis);
    
    const parse = JSON.parse(userDatas);
    // console.log(parse);
  
    if(checkUsername(parse, "namee", nameeReg) || nameeReg === ''){
      setRegisDangerAlert(false);
    } else {
      // console.log(regis);
      parse.push(regis);
      // console.log(parse);
      sessionStorage.setItem('users', JSON.stringify(parse));
      setRegisSuccessAlert(false);
      setHiddenButRegis(false)
    }

  }
  const handleLogin = (event) => {
    event.preventDefault();
    setLoginDangerAlert(true);
    
    const parse = JSON.parse(userDatas);
    
    if(!checkAuthLogin(parse, "namee", nameeLog, "pass", passLog) || nameeLog === ''){
      setLoginDangerAlert(false);
      console.log('Truee');
    } else {
      // console.log(parse);
      // console.log(`login: ${nameeLog}, ${passLog}`);
      // console.log(`Success Login`);
      // setLoginDangerAlert(true);
      // console.log(`Falsee`);

      sessionStorage.setItem('login', 'true')
    }
  }
  // const loginTrue = () => {
  //   sessionStorage.setItem('login', 'true')
  // }

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
                placeholder='Username'
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
            <div hidden={regisDangerAlert} style={{color: 'red'}}> 
              <div className='flexcenter'> Username already taken,</div> 
              <div className='flexcenter'> try another username </div> 
            </div>
            
            <div className='button-log-reg-box'>
              { (hiddenButRegis)
                ? <input type='submit' value='Register'/>
                : <div hidden={regisSuccessAlert} style={{color: 'lightgreen'}}> 
                    <div className='flexcenter'> Register Sucessfully </div>
                  </div>
              }
            </div>  
            {/* <div onClick={handleRegister}> Register </div> */}
          </form>
        </div>
        
        <div className='log-reg-box'>
          <form onSubmit={handleLogin}>
            <div style={{paddingBottom: '1rem'}}>
              <input 
                type="text"
                placeholder='Username'
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

            <div hidden={loginDangerAlert} style={{color: 'red'}}> 
              <div className='flexcenter'> Wrong Username or Password </div>
            </div>

            {/* Button Login: Make to login true on Session Storage */}
            {/* <div
              className='button-log-reg-box'
              onClick={loginTrue}
            > Session Storage Login = True </div> */}

            {/* Button Login: To '/' Page */}
            {/* <div className='button-log-reg-box'>
              <button 
                style={{
                  backgroundColor: 'transparent', 
                  borderColor: 'transparent',
                }}
              ><Link to='/'> To Home Page </Link></button>
            </div> */}
            
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
