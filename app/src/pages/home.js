import React from 'react'
import AOS from 'aos'
import homepage from '../assets/images/frosh-2021-homepage.svg'
import CheckoutTile from './checkoutTile';

import "../assets/scss/_home.scss"
import { Button } from '@material-ui/core';
import Sponsors from '../components/common/Sponsors';



export default function Home() {

  const goToRegistration = (button) => {
    window.open("https://e1.envoke.com/ct/3975/2379498/769529796/d6d5458fb4044d1246b9c45ca24b31ac");
  }

AOS.init({
    duration : 1500
    
  })

    return (<main>
    <div className="container home"> 
   

      
       <div className="soft aos-item" data-aos="zoom-out-down" data-aos-mirror="true" data-aos-easing="ease-in-sine"className="part1" >
        <img className="homePage" src={homepage} alt="logo"/>

       </div>
              
         </div>
    
       
         
        
    <div className="container home"> 
    <div className="genInfo" data-aos="zoom-out-down" data-aos-mirror="true" data-aos-easing="ease-in-sine">
    <div className="row">
        <div className="col-xs-2 col-xs-offset-4">
        <h2 className="title">WHAT IS FROSH?</h2>
        </div>
            <div className="col-xs-2">
            <p className="paragraph" > Welcome to McGill Engineering! We here at the Engineering Undergraduate Society (EUS) would like to wish you a warm welcome to McGill. The EUS is the student-run representative body of undergraduate students in the Faculty of Engineering, supporting student clubs, design teams, services, groups, and more. Your first chance to get involved in the EUS will be at Orientation Week, or Engineering Frosh. For the past 4 months, the Frosh Committee has been planning the Heist of the Century. We are almost ready to pull it off, but we still need more people for our team. We have been watching you for some time now and we believe you have the set of skills we need. Join us from August 27th to 30th for Operation Frosh: The Ultimate Heist, click below to register.</p>
            
            </div>
            </div>
          <Button varient="contained" className="registration-button" onClick={goToRegistration}>REGISTER</Button>
            </div>    
    </div>

    <section className="container home checkouttiles"> 

    <CheckoutTile title="Official Engineering Frosh Statement" description="For more information on the format of frosh, read the Engineering Frosh 2021 Committee's official statement." link="https://docs.google.com/document/d/1T4FHYOQeVlGnYLRMoP3EnbL-PBkyI4MR0FV8MZ0wxVU/edit?usp=sharing" buttonTitle="Read more"></CheckoutTile>
    
    <CheckoutTile title="Frosh Bursaries" description="If the tickets for Engineering Frosh are out of your budget, apply to our bursaries which help cover the costs of attending Engineering Frosh." link="https://drive.google.com/file/d/1nu2D2rgMbtf_Ry2al3DCuAanBmZiukGj/view?usp=sharing" buttonTitle="Apply now"></CheckoutTile>
{/* 
    <CheckoutTile title="EUS Frosh Blog" description="Our frosh blog is filled with updates on COVID and its impact on Frosh, and articles from EUS publications curated for first year students!"link="https://oweek.mcgilleus.ca/#/blog" buttonTitle="Check it out"></CheckoutTile>
     */}

    <CheckoutTile title="EUS Wiki" description="The EUS Wiki contains information on everything you could ever want to know about life as a McGill Engineering student." link="https://eus.wiki/Launchpad" buttonTitle="Learn more"></CheckoutTile>

    <CheckoutTile title="Frosh 2021 Playlist" description="Our committee worked hard to put together this sick playlist which will be the soundtrack to your Engineering Frosh 2021." link="https://open.spotify.com/playlist/7lrPlcXz0z2gGGy9TeFSMP" buttonTitle="Listen now"></CheckoutTile>
    </section>
   
    <div className="container home"> 
    <div className="theme-reveal">
     
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-zWp2mwdUzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
           
            
    </div>
 
    <br class="clear" />


    <br class="clear" />
    <section className="container home" > 
    <div className="hotspots-map">
      <iframe title="Engineering Hotspots Map" src="https://www.google.com/maps/d/u/0/embed?mid=1WhFydNbr6_-OxM01NWEIWWUjd5M8p_rO" width="640" height="480"></iframe>
    </div>
    </section>

    <br class="clear" />
    <div className="container home"> 
      <Sponsors></Sponsors>      
    </div>
    

    
    </main>



      
    );
  
  
   
}