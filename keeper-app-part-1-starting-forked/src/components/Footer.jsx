import React from "react";

function Footer() {

  const currentDate = new Date();
  const year =currentDate.getFullYear();

  return (
  <footer>
  <p>Copyright Reserved {year}</p>
  </footer>
  );
 } 

 export default Footer;