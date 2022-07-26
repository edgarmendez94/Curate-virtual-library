import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import { useQuery } from "@apollo/client";
import "../../App.css";

const Footer = () => {
  return (
    <footer id="footer">
      <p>Curate</p>
      <p>Copyright © 2022 curate</p>
      <p className="contributors">
        Made By: Toni, Edgar, Theo, Elliott, Michael, and Taeyong
      </p>
      <p>Thank you for visiting our Site!</p>
      <p>Be sure to check out our affiliate pages below</p>
      <div className="links">
<<<<<<< HEAD
        <a href="https://github.com/edgarmendez94/virtual-library">
=======
        <a href="">
>>>>>>> c4ad7fde4577b5c18f79a1a10ebe3b37e799bf0e
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a href="https://www.facebook.com/CUSEASBootCamp/">
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/explore/tags/catmemes/?hl=en">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
