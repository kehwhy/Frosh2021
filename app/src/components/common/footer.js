import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import "../../assets/scss/footer.scss"

function Footer() {
  return (
     
    <div className="footer">
    <div className="social-container">
      <a
      href="https://www.youtube.com/c/McGillEngineeringOrientationWeek/"
      className="youtube social"
    >
      <FontAwesomeIcon icon={faYoutube} size="xs" />
    </a>
    <a
      href="https://www.facebook.com/EngineeringFrosh/"
      className="facebook social"
    >
      <FontAwesomeIcon icon={faFacebook} size="xs" />
    </a>
    <a
      href="https://www.instagram.com/engineeringfrosh/"
      className="instagram social"
    >
      <FontAwesomeIcon icon={faInstagram} size="xs" />
    </a>

    <a
      href="https://www.tiktok.com/@engineeringfrosh?lang=en"
      className="tiktok social"
    >
      <FontAwesomeIcon icon={faTiktok} size="xs" />
    </a>

    </div>

    <h2>MCGILL ENGINEERING FROSH </h2>
    <div className="contact-info">
              <p className="address" >Address : 845 Sherbrooke St W  &bull; Montreal, QC &bull; H3A 0G4 </p>
              <p className="number">Phone : (514) 398-4455</p>
              <p className="email">Email : oweek.mcgilleus.ca</p>         
      </div>
      <p className="p2">&copy; McGill EUS 2021 <br/>Made with 💕 by Massy Mahamli and updated with ✨ by Katie Younge</p>
    </div>
  );
}

export default Footer;