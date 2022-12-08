import '../../styles/App.css';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useEffect, useState } from 'react';

export default function Navbar() {
  // const [isLogin, setIsLogin] = useState();
  // console.log('ke1', isLogin);

  let custom = sessionStorage.getItem("login")
  console.log('wkwk1', sessionStorage.getItem("login"));

  if(sessionStorage.getItem("login") == null){
    // console.log('tesss')
    // setIsLogin(false);
    sessionStorage.setItem("login", false)
  }

  // function handleAuthen(log) {
  //   sessionStorage.setItem("users", log)
  // }
  
  // const path = useLocation().pathname;
  // const isLogin = sessionStorage.getItem("login");
  
  

  // const [navLeft, setNavLeft] = useState();
  // const [navCounter, setNavCounter] = useState();
  // const [navRight, setNavRight] = useState();
  
  
  // useEffect(() => {
    
    // console.log('cek bool', Boolean(sessionStorage.getItem("login")));
    // const isNotLogin2 = sessionStorage.getItem("login")

    // console.log('wkwk1', sessionStorage.getItem("login"));

    // if(sessionStorage.getItem("login") == null){
    //   // console.log('tesss')
    //   setIsLogin(false);
    //   sessionStorage.setItem("login", false)
    // }

    // const isNotLogin3 = Boolean(isNotLogin2)
    // console.log('wkwk2', isNotLogin3);
    // setIsLogin(isLogin2);

    // if(custom == 'true'){
    //   setIsLogin(true);
    //   sessionStorage.setItem("login", true)
    // } else {
    //   // console.log('a1', isLogin2)
    //   setIsLogin(false);
    //   sessionStorage.setItem("login", false)
    // }


    // if(sessionStorage.getItem("users") == null){
    //   setIsLogin(true);
    //   sessionStorage.setItem("users", null)
    // };

    // setIsLogin((sessionStorage.getItem("login")));
    // console.log('ke2', isLogin);
    // console.log(typeof(isLogin2));

  //   if(path == '/login'){

  //   }
  //   if(path == '/profile'){

  //   }
    
  //   setNavRight(isLogin)
  // }, []);
  
  // console.log(sessionStorage);
  // console.log(path);

  // console.log('wkwk2', isLogin);
function inin() {
  sessionStorage.setItem("login", true)
  // console.log('inin')
}
function otot() {
  sessionStorage.setItem("login", false)
  // console.log('otot')
}
  return (
    <div className="navbar">
      <div className='container'>
    
        <div className='navBarCenter'>

          {/* <div className='navPart flexleft'><Link to='/'>Home</Link></div> */}
          <div className='navPart flexleft'>
            { (custom == 'true')
              ? <Link to='/profile'>Profile</Link>
              : <Link to='/'>Home</Link>
            }
          </div>

          {/* <div className='navPart flexcenter'>Time CountDown</div> */}
          {/* <div className='navPart flexcenter'>
            <div className='counterBorder'>
              <div className='counter'> 15 </div>
            </div>
          </div> */}
          <div className='navPart flexcenter'>
            { (custom == 'true')
              ? <div className='counterBorder'>
                  <div className='counter'> 15 </div>
                </div>
              : <></>
            }
          </div>

          {/* <div className='navPart flexcenter'><Link to='/profile'>Profile</Link></div>
          <div className='navPart flexright'><Link to='/login'>Login</Link></div> */}
          <div className='navPart flexright'>
            { (custom == 'true')
              ? <div onClick={otot}><Link to='/login'>Logout</Link></div>
              : <div onClick={inin}><Link to='/login'>Register / Login</Link></div>
            }
          </div>

        </div>
        
      </div>

    </div>
  )
}