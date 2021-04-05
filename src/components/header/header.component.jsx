import React from "react";

import "./header.styles.scss";
function Header() {
  return (
    <div className="header">
      {/* <div className="logo-container">
        <div className="logo">logo</div>
      </div> */}
      <div className="options">
        <div className="option">home</div>
        <div className="option">about</div>
        <div className="option">resume</div>
        <div className="option">work</div>
        <div className="option">contact</div>
      </div>
    </div>
  );
}

export default Header;
