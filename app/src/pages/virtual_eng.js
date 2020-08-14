import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import profilepic from '../assets/images/ledgerlogo.png'
import header from '../assets/images/virtual_eng.png'
import mtltip1 from '../assets/images/mtl tip 1.png'
import mtltip from '../assets/pdfs/virtualeng.pdf'
import mtltip2 from '../assets/images/mtl tip2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";



export default function MtlTips() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return(
        <div>
        <div className="welcome">
        <h1 className="title">Fall 2020 Virtual Engineering
Events
        </h1>
        <a className="subtitle">This article was written for the <a href="https://ledger.mcgilleus.ca">Plumber's Ledger </a></a>
        <br></br>
        <img src={profilepic} alt='logo'/> <a className="author">Sharon Kattar</a>
        <p className="date">August 13th, 2020</p>
        <img src={header} alt="logo"></img>
        <br></br><br></br>
        <iframe src={mtltip} paddingLeft="20" alignSelf = "center" width="100%" height="700px" frameBorder='0' border="0"></iframe>
       

        
        </div>

<section className="footing">
<footer className="footerend">


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

  </footer>
  </section>
  </div>



    );


  
}