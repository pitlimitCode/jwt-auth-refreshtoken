import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
import axios from "axios";

import Home from './pages/Home';
import RegLog from './pages/Login';
import Profile from './pages/Profile';

export default function App() {
  const varCdTime = 25;

  if(sessionStorage.getItem('login') == null){
    sessionStorage.setItem('login', 'false');
    sessionStorage.setItem('token', null);
    sessionStorage.setItem('activeUser', null)
    sessionStorage.setItem('tokenExpired', null);
    const users = [ {
                      namee: 'user',
                      pass: 'pass',
                  },];
    // console.log(users);
    const userJsonString = JSON.stringify(users);
    // console.log(userJsonString);
    sessionStorage.setItem('users', userJsonString);
    // const userJsonParse = JSON.parse(userJsonString);
    // console.log(userJsonParse); 
  }

  const [countdown, setCountdown] = useState(varCdTime);
  useEffect(() => {
    const timer = countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => { clearTimeout(timer); };
  }, [countdown]);

  const buttonCd = () => {
    
    axios.post('http://localhost:8000/refresh', {
      jwt: sessionStorage.getItem('token')
    })
      .then(res => {
        if (res.data.token === 'expired'){
          sessionStorage.setItem("login", 'false')
          sessionStorage.setItem('token', null)
          sessionStorage.setItem('activeUser', null)
        } else {
          sessionStorage.setItem('token', res.data.token);
          sessionStorage.setItem('tokenExpired', res.data.tokenExpired);
          setCountdown(varCdTime)
        }
      });

  };
  
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home cd={countdown} />} />
          <Route path="/login" element={<RegLog startCd={setCountdown} varCdTime={varCdTime} />}/>
          <Route path="/profile" element={<Profile cd={countdown} buttonCd={buttonCd} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
