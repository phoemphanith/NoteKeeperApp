import React from "react";

const today = new Date();

function Footer() {
  return (
    <footer>
      <p>Copyright@{today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
