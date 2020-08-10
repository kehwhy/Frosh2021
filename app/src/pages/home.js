import React from 'react'
import leaders from '../assets/images/leaders.jpg'
import concert from '../assets/images/concert.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import sponsors from '../assets/images/sponsors.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,

  faInstagram
} from "@fortawesome/free-brands-svg-icons";


export default function Home() {

AOS.init({
    duration : 1500
    
  })

    return<div className="home">
    <div className="home-title" > 
        <img className="backImage" src = {concert}></img>
        <img className="backImage2" src = {leaders}></img>
        <p className= "engfrosh" data-aos="fade-right" >
                20 
                  <span className = "engfrosh12"> 20</span>
         </p>
        <br></br>
        <p className= "engfrosh2" data-aos="fade-left" >
                EN 
                  <span className = "engfrosh22" > G</span>
         </p>

        <br></br>
        <p className= "engfrosh3" data-aos="fade-right" >
            FRO<span className = "engfrosh32">SH</span>
        </p>
        <div className="genInfo" data-aos="zoom-out">
            <a className="a1">WHAT</a>
            <br></br>
            <a className="a2">IS</a>
            <br></br>
            <a className="a3">FROSH</a>
            <p className="paragraph"> Welcome to McGill Engineering! We here at the Engineering Undergraduate Society (EUS) would like to wish you a warm welcome to McGill. The EUS is the student-run representative body of undergraduate students in the Faculty of Engineering, supporting student clubs, design teams, services, groups, and more. Your first chance to get involved in the EUS will be at Orientation Week, or Engineering Frosh, occurring August 27th through August 30th. The team of Engineering Frosh Coordinators, composed entirely of engineering students, has been working hard all summer to bring you the most exciting week possible. Check out our event trailer and our Facebook and Instagram pages below, and email us any time at oweek@mcgilleus.ca.</p>
        </div>
        <section className="themereveal" data-aos="fade-in">
       
        <iframe width="700" height="320" src="https://www.youtube.com/embed/8Amqt58t0Oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br></br>
       <p className="theme">THEME</p>
        </section>
       
        <section className="sponsor" >
            <section className="blog" data-aos="zoom-out">
                <a>CHECK OUT OUR <li><Link to="/blog" className="bloglink">BLOG</Link></li></a>
                <p className="paragraph">It's filled with updates on online frosh, winter frosh and articles curated for first year students!</p>

            </section>
            <a>SPONSORS</a>
            <br></br>
            <a>SPONSORS</a>
            <br></br>
            <a>SPONSORS</a>
            <br></br>
            <img src={sponsors} alt="logo"/>
            <section className="hotspot">

            <a className="hotspottitle" data-aos="zoom-out">HOT SPOTS</a>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1R93iBs8WmKtVZuMhj6d02k8jqC4VdENA" width="640" height="480" frameborder="0"></iframe>
            </section>


   

       
            
        </section>
      
    </div>
    

    <section className="footers">
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

  
   
}