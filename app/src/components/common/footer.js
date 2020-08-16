import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,

  faInstagram
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
     
    <div className="footer">
    <h2>McGill EUS Frosh 2020</h2>
    <section>
  
              <p className="p1" >Address : 845 Sherbrooke St W  &bull; Montreal, QC &bull; H3A 0G4
              <br></br> <br></br>
              Phone : (514) 398-4455
              <br></br> <br></br>
              Email : oweek.mcgilleus.ca
              </p>
              

             
              
      <p className="p2">&copy; McGill EUS 2020 <br/>Made with 💕 by Massy Mahamli</p>
      <div className="social-container">
      <a
      href="https://www.youtube.com/c/McGillEngineeringOrientationWeek/"
      className="youtube social"
    >
      <FontAwesomeIcon icon={faYoutube} size="0.1x" />
    </a>
    <a
      href="https://www.facebook.com/EngineeringFrosh/"
      className="facebook social"
    >
      <FontAwesomeIcon icon={faFacebook} size="0.1x" />
    </a>
    <a
      href="https://www.instagram.com/engineeringfrosh/"
      className="instagram social"
    >
      <FontAwesomeIcon icon={faInstagram} size="0.1x" />
    </a>
    </div>
      </section>
      
    </div>
  );
}

export default Footer;