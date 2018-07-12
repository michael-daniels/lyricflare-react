import React from 'react';

const Navbar = (props) => {
  return (
    <div className="navbarr">
      <div className="logo">LyricFlare</div>
      <div className="hello-user">Hello, {props.userinfo.username}</div>
    </div>

  )
}

export default Navbar;
