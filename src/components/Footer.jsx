import React from "react";

const curryear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright @ Priyanshuu23 {curryear}</p>
    </footer>
  );
}

export default Footer;
