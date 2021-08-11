import React from "react";
import {
    AppBar, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
  } from '@material-ui/core';

import Katie from "../assets/images/coords/Katie.svg"
import Efe from "../assets/images/coords/Efe.svg"
import Anushri from "../assets/images/coords/Anushri.svg"
import Sophie from "../assets/images/coords/Sophie.svg"
import Yassi from "../assets/images/coords/Yassi.svg"
import Sep from "../assets/images/coords/Sep.svg"
import Tati from "../assets/images/coords/Tati.svg"
import Kells from "../assets/images/coords/Kells.svg"
import Juliana from "../assets/images/coords/Juliana.svg"
import Zaina from "../assets/images/coords/Zaina.svg"
import Ashley from "../assets/images/coords/Ashley.svg" 

import "../assets/scss/_coords.scss"


const renderCoordPic = (name, index) => {
    return(
        <div className="coordPhoto">
            <img src={coordImages[index]} alt={`${coord_names[index]}`}/>
            <div className="coordName">{coord_names[index]}</div>
            <div className="coordTitle">{coord_positions[index]}</div>
        </div>

    );
} 

var coordImages = [
    Yassi, Katie, Kells, Zaina, Juliana, Efe, Sophie, Anushri, Tati, Sep, Ashley
];

const coord_names = [
    "Yassaman Bassiri", "Katie Younge", "Kells Moore", "Zaina Khan", "Juliana Ferraro", 
    "Efe Grant-Oyeye", "Sophie Jones-Glick",  "Anushri Pundit",  "Tatiana El Khoury", "Sepehr Moalemi", "Ashley Bock",
]

const coord_positions = [
    "VP Internal", "Co-Chief", "Co-Chief", "Night Events and IFC", "Day Events", "Communications",  "Merch and Branding", 
     "Inclusivity and Sustainability",  "Leaders and Staff", "Tech and Involvement", "Sponsorship"
]

const Coords = () => {
    
    return(
            <div className="coordPage">
                <div className="coordsRoot"> 
                {coord_names.map((name, index) => renderCoordPic(name, index))}
                </div>
            </div>
            
        );
}

export default Coords;