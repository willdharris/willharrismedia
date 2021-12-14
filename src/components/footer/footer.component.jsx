import React from "react";

import "./footer.styles.scss";
function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <section>
      <div className="footer">
        Designed and built by Will Harris. © {year} Will Harris Media.
      </div>
    </section>
  );
}

export default Footer;
