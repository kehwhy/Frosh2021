import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import profilepic from '../assets/images/ledgerlogo.png'

import mtltip from '../assets/pdfs/nostalgia.pdf'

import "../assets/scss/_welcome.scss"

export default function MtlTips() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return(
        <div>
        <div className="welcome">
        <h1 className="title">Ambivalent nostalgia
   

        </h1>
        <a className="subtitle">This cartoon was written for the <a href="https://ledger.mcgilleus.ca">Plumber's Ledger </a></a>
        <br></br>
        <p className="author"><img src={profilepic} className="profile" alt='logo'/> E.D</p>
        <p className="date">August 13th, 2020</p>
        <br></br><br></br>
        <div className="hide-small"><iframe src={mtltip} paddingLeft="20" alignSelf = "center" width="100%" height="700px" frameBorder='0' border="0"></iframe></div>
        <div className="show-small">Oops your device doesn't support PDFs! Check out our website on a larger device :)</div>

        
        </div>


  </div>



    );


  
}