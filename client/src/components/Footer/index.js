import React from "react";
// import { useQuery } from "@apollo/client";
import "../../App.css";

const Footer = () => {
  return (
    <footer id="footer">
      <p>curate</p>
      <p>Copyright © 2022 curate</p>
      <p class="contributors">
        Made By: Toni, Edgar, Theo, Elliott, Michael, and Taeyong
      </p>
      <p>Thank you for visiting our Site!</p>
      <p>Be sure to check out our affiliate pages below</p>
      <div class="links">
        <a href="">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/CUSEASBootCamp/">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/explore/tags/catmemes/?hl=en">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
