import React from 'react';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="logo">LOGOHERE</div>
      <div className="hello-user">Hello, {props.userinfo.username}</div>
    </div>

  )
}

export default Navbar;
