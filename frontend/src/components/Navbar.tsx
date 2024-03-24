import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {

  const [loggedIn, setLoggedIn] = useState(true)

  // if() {  // logged in
  //   setLoggedIn(true)
  // } else {
  //   setLoggedIn(false)
  // }

  return (
    <div id="navbar">
      <Link to="/" id="navbar a"> Home </Link>
      {loggedIn && <Link to="/dashboard" id="navbar a"> Dashboard </Link>}
      <Link to="/login" id="navbar a"> Login </Link>
      <Link to="/profile" id="navbar a"> Profile </Link>
    </div>
  );
}
