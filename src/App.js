import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Page from './pages/Login';
import Profile from './pages/Profile';

export default function App() {
  // const isLogin = sessionStorage.getItem("login");
  // console.log(isLogin);
  // const isLogin = 'test'
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<Home data1={isLogin} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Page />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
