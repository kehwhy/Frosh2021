import React from 'react'
import leaders from '../assets/images/leaders.jpg'
import concert from '../assets/images/concert.jpg'
import logo from '../assets/images/logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Instagram from '../assets/images/InstaLogo.png'
import Facebook from '../assets/images/FacebookLogo.png'

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
            <a>WHAT</a>
            <br></br>
            <a>IS</a>
            <br></br>
            <a>FROSH</a>
            <p className="paragraph"> Welcome to McGill Engineering! We here at the Engineering Undergraduate Society (EUS) would like to wish you a warm welcome to McGill. The EUS is the student-run representative body of undergraduate students in the Faculty of Engineering, supporting student clubs, design teams, services, groups, and more. Your first chance to get involved in the EUS will be at Orientation Week, or Engineering Frosh, occurring August 27th through August 30th. Engineering Frosh is the largest event of the Fall semester, with the majority of the 800 new engineering students taking part in events such as concert nights, sports, beach day, and more! The team of Engineering Frosh Coordinators, composed entirely of engineering students, has been working hard all summer to bring you the most exciting week possible. Check out our event trailer and our Facebook and Instagram pages below, and email us any time at oweek@mcgilleus.ca.</p>
        </div>
        <section className="themereveal" data-aos="fade-in">
       
        <iframe width="960" height="540" src="https://www.youtube.com/embed/8Amqt58t0Oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br></br>
       
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
            <section className="hotspot" >

            <a className="hotspottitle" data-aos="zoom-out">HOT SPOTS</a>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1R93iBs8WmKtVZuMhj6d02k8jqC4VdENA" width="640" height="480" frameborder="0"></iframe>
            </section>


   
  <footer className="footerend">
  <div >
      <h2>McGill EUS Frosh 2020</h2></div>
      <section>
    
                <p >Address : 845 Sherbrooke St W  &bull; Montreal, QC &bull; H3A 0G4</p>
                <p >Phone : (514) 398-4455 &bull; Email : oweek@mcgilleus.ca </p>
                
        <p>&copy; McGill EUS 2020 <br/>Made with 💕 by Massy Mahamli</p>

        </section>
        
        </footer>

            
        </section>
        <section>

        </section>
    </div>
    
    </div>

  
   
}