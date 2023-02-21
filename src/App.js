import './styles/App.css';
import Home from './pages/Home';
import RegLog from './pages/Login';
import Profile from './pages/Profile';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';

export default function App() {
  if(sessionStorage.getItem('login') == null){
    sessionStorage.setItem('activeUser', null)
    sessionStorage.setItem('login', 'false');
    sessionStorage.setItem('token', null);
    sessionStorage.setItem('tokenExpired', null);
    sessionStorage.setItem('varCdTime', 0);
    const users = [{ namee: 'user', pass: 'pass' }];
    const userJsonString = JSON.stringify(users);
    sessionStorage.setItem('users', userJsonString);
  }

  const [countdown, setCountdown] = useState();
  useEffect(() => {
    const timer = countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => { clearTimeout(timer); };
  }, [countdown]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home cd={countdown} />} />
          <Route path="/login" element={<RegLog startCd={setCountdown} />}/>
          <Route path="/profile" element={<Profile cd={countdown} refreshCd={setCountdown}/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
