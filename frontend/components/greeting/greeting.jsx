import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, { currentUser.email }!</h2>
    <button className="header-button" onClick={ logout} >Log Out</button>
    <Carousel/>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;