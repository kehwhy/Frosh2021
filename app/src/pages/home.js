import React from 'react'
import leaders from '../assets/images/leaders.jpg'
import concert from '../assets/images/concert.jpg'
import AOS from 'aos'
import background from '../assets/images/background-first.svg'
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

    return (<main>
    <section className="container home"> 
   

      
       <div className="part1" >
        <img src={background} alt="logo"/>

       </div>
              
         </section>
    
       
         
         <br class="clear" />
    <br class="clear" />
    <div className="container home"> 
    <div className="genInfo">
    <div className="row">
        <div className="col-xs-2 col-xs-offset-4">
        <h2>WHAT IS FROSH</h2>
        </div>
            <div className="col-xs-2">
            <p className="paragraph" > Welcome to McGill Engineering! We here at the Engineering Undergraduate Society (EUS) would like to wish you a warm welcome to McGill. The EUS is the student-run representative body of undergraduate students in the Faculty of Engineering, supporting student clubs, design teams, services, groups, and more. Your first chance to get involved in the EUS will be at Orientation Week, or Engineering Frosh, occurring August 27th through August 30th. The team of Engineering Frosh Coordinators, composed entirely of engineering students, has been working hard all summer to bring you the most exciting week possible. Check out our event trailer and our Facebook and Instagram pages below, and email us any time at oweek@mcgilleus.ca.</p>
            </div>
            </div>
            </div>    
    </div>

   
    <div className="container home"> 
    <div className="theme reveal">
     
    <iframe width="700" height="320" src="https://www.youtube.com/embed/8Amqt58t0Oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           
            
    </div>
 
    <br class="clear" />

    <section className="container home"> 
    <div className="check">
       <li className="bloglink"><Link to="/blog" className="bloglink">CHECK OUT OUR BLOG</Link></li>
                <p className="paragraph">It's filled with updates on online frosh, winter frosh and articles curated for first year students!</p>
                </div>
       
    </section>

    <br class="clear" />
    <div className="container home"> 
    <div className="sponsors">
    <img src={sponsors}  alt="logo"  />
        
           
            </div>      
    </div>
    
    <br class="clear" />
    <section className="container home" > 
       
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1R93iBs8WmKtVZuMhj6d02k8jqC4VdENA" width="640" height="480" frameborder="0"></iframe>
    </section>

    
    </main>



      
    );
  
  
   
}

/*<div className="container" >
            <p className="hotspottitle" data-aos="fade-up"
     data-aos-duration="3000">HOT SPOTS</p>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1R93iBs8WmKtVZuMhj6d02k8jqC4VdENA" width="640" height="480" frameborder="0"></iframe>
            </div>*/

/*<main className="blog">
    <section className="container home"> 
    <img className="backImage" src = {concert} alt="logo"></img>
        <img className="backImage2" src = {leaders} alt="logo"></img>
        <p className= "engfrosh" data-aos="fade-right" >
                20 
                  <span className = "engfrosh12" > 20</span>
         </p>
        <br></br>
        <p className= "engfrosh2" data-aos="fade-left" >
                EN 
                  <span className = "engfrosh22" > G</span>
         </p>

        <br></br>
        <p className= "engfrosh3" data-aos="fade-right" >
            FRO<span className = "engfrosh32" >SH</span>
        </p>
    </section>


    <section className="container home"> 
    <a className="a1" >WHAT</a>
            <br></br>
            <a className="a2" >IS</a>
            <br></br>
            <a className="a3" >FROSH</a>
            <p className="paragraph" > Welcome to McGill Engineering! We here at the Engineering Undergraduate Society (EUS) would like to wish you a warm welcome to McGill. The EUS is the student-run representative body of undergraduate students in the Faculty of Engineering, supporting student clubs, design teams, services, groups, and more. Your first chance to get involved in the EUS will be at Orientation Week, or Engineering Frosh, occurring August 27th through August 30th. The team of Engineering Frosh Coordinators, composed entirely of engineering students, has been working hard all summer to bring you the most exciting week possible. Check out our event trailer and our Facebook and Instagram pages below, and email us any time at oweek@mcgilleus.ca.</p>

    </section>


    <section className="container home"> 

       <p className="check">CHECK OUT OUR <li><Link to="/blog" className="bloglink">BLOG</Link></li></p>
                <p className="paragraph">It's filled with updates on online frosh, winter frosh and articles curated for first year students!</p>

       
    </section>


    <section className="container home"> 
        <p className="a">SPONSORS</p>

            <p className="a">SPONSORS</p>
            <p className="a">SPONSORS</p>
           
           
            <img src={sponsors} alt="logo"/>
    </section>

    <section className="container home"> 
        <p className="hotspottitle" data-aos="fade-up"
     data-aos-duration="3000">HOT SPOTS</p>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1R93iBs8WmKtVZuMhj6d02k8jqC4VdENA" width="640" height="480" frameborder="0"></iframe>
    </section>

    
    </main>
    */





    /*<main className="blog">
    <div className="home">
    <div className="container" > 
        <img className="backImage" src = {concert} alt="logo"></img>
        <img className="backImage2" src = {leaders} alt="logo"></img>
        <p className= "engfrosh" data-aos="fade-right" >
                20 
                  <span className = "engfrosh12" > 20</span>
         </p>
        <br></br>
        <p className= "engfrosh2" data-aos="fade-left" >
                EN 
                  <span className = "engfrosh22" > G</span>
         </p>

        <br></br>
        <p className= "engfrosh3" data-aos="fade-right" >
            FRO<span className = "engfrosh32" >SH</span>
        </p>
        </div>
        <div className="container" data-aos="fade-up"
     data-aos-duration="3000" >
            <a className="a1" >WHAT</a>
            <br></br>
            <a className="a2" >IS</a>
            <br></br>
            <a className="a3" >FROSH</a>
            <p className="paragraph" > Welcome to McGill Engineering! We here at the Engineering Undergraduate Society (EUS) would like to wish you a warm welcome to McGill. The EUS is the student-run representative body of undergraduate students in the Faculty of Engineering, supporting student clubs, design teams, services, groups, and more. Your first chance to get involved in the EUS will be at Orientation Week, or Engineering Frosh, occurring August 27th through August 30th. The team of Engineering Frosh Coordinators, composed entirely of engineering students, has been working hard all summer to bring you the most exciting week possible. Check out our event trailer and our Facebook and Instagram pages below, and email us any time at oweek@mcgilleus.ca.</p>
        </div>
        <div className="container" data-aos="fade-in">
       
        <iframe width="700" height="320" src="https://www.youtube.com/embed/8Amqt58t0Oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br></br>
       <p className="theme">THEME</p>
        </div>
       
        <div className="container" >
            <div className="blog" data-aos="fade-up"
     data-aos-duration="3000">
                <p className="check">CHECK OUT OUR <li><Link to="/blog" className="bloglink">BLOG</Link></li></p>
                <p className="paragraph">It's filled with updates on online frosh, winter frosh and articles curated for first year students!</p>

        </div>
        </div>
        <div className="container" >

            <p className="a">SPONSORS</p>

            <p className="a">SPONSORS</p>
            <p className="a">SPONSORS</p>
           
           
            <img src={sponsors} alt="logo"/>

          </div>


          <div className="container" >
            <p className="hotspottitle" data-aos="fade-up"
     data-aos-duration="3000">HOT SPOTS</p>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1R93iBs8WmKtVZuMhj6d02k8jqC4VdENA" width="640" height="480" frameborder="0"></iframe>
            </div>
          


   

       
       
      
    </div>


  
    </main>*/