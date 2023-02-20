import './styles/App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Page from './pages/Login';
import Profile from './pages/Profile';

export default function App() {
  if(sessionStorage.getItem('login') == null){
    sessionStorage.setItem('login', 'false');
    const users = 
    [
      {
        namee: 'user',
        pass: 'pass',
      },
    ];
    // console.log(users);
    const userJsonString = JSON.stringify(users);
    // console.log(userJsonString);
    sessionStorage.setItem('users', userJsonString);
    // const userJsonParse = JSON.parse(userJsonString);
    // console.log(userJsonParse);
    
  }
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Page />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
