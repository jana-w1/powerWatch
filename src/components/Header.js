import React from 'react';
import '../styles/Header.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from './SignIn';

function Header() {
  return (
<Router>    <header className="header">
      <h1>Power Watch Lebanon</h1>
      <p>Track and report electricity availability in Lebanon.</p>
      <SignIn/>
        <Routes>
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </header></Router>
  );
}

export default Header;
