import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import profilepic from '../assets/images/ledgerlogo.png'
import header from '../assets/images/money.jpg'
import mtltip1 from '../assets/images/mtl tip 1.png'
import mtltip from '../assets/pdfs/savemoney.pdf'
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
        <h1 className="title">How to save money as a
student in Montreal
   

        </h1>
        <a className="subtitle">This article was written for the <a href="https://ledger.mcgilleus.ca">Plumber's Ledger </a></a>
        <br></br>
        <img src={profilepic}  className="profile" alt='logo'/> <a className="author">Paul Hinta</a>
        <p className="date">August 13th, 2020</p>
        <img src={header} alt="logo"></img>
        <br></br><br></br>
        <div className="hide-small"><iframe src={mtltip} paddingLeft="20" alignSelf = "center" width="100%" height="700px" frameBorder='0' border="0"></iframe></div>
        <div className="show-small">Oops your device doesn't support PDFs! Check out our website on a larger device :)</div>

        
        </div>


  </div>



    );


  
}