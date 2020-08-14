import React  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Drivesafe from'../assets/images/drivesafe.svg'
import EUSMHC from '../assets/images/eus mhc.svg'
import mcgill from '../assets/images/mcgill.png'
import mcgillhealth from '../assets/images/mcgill health.png'
import mcgillsecurity from '../assets/images/mcgill security.jpg'
import MSERT from '../assets/images/MSERT.png'
import nightline from '../assets/images/nightline.jpeg'
import osd from '../assets/images/osd.png'
import osverse from '../assets/images/osverse.png'
import peersupport from '../assets/images/peer support.png'
import redfrogs from '../assets/images/red frogs.jpg'
import sacomms from '../assets/images/sacomms.jpeg'
import walksafe from '../assets/images/walksafe.png'
import cle from '../assets/images/cle.png'
import branches from'../assets/images/branches.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paragraph:{
      fontweight:200,
      fontSize:20,
    
  },
  img:{
    padding:20,
  }
 
  },
  
}));

function Resources() {
    const classes = useStyles();


    
    return (
    <div>
     
        <div className="faqs">
        <p className="questions">RESOURCES
   

        </p>
       
      </div>
      <div className="hide-small2">
      <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <img src={Drivesafe} alt="logo"/>
              <h2 className={classes.paragraph}>Drivesafe <br></br>(514) 398-8040</h2>
              <p >This student-run service of the Students’ Society of McGill University (SSMU) drives students safely anywhere on the island of Montreal for free. Don’t hesitate to give them a call during Frosh if you are looking for a safe way to get home! Leaders and staff can also call them for you at night events. For more information, check out their <a href="https://drivesafe.ssmu.ca/">website!</a></p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={walksafe} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>Walksafe <br></br> (514) 398-2498</h2>
              <p>This student-run SSMU service has the goal of bringing you home safely. During and after Frosh, we encourage you to never walk home alone. If none of your friends or Leaders are around, give them a call and one of their volunteers will walk you home for free. Leaders and staff on duty can also call them for you at night events. For more information, check out their <a href="https://walksafe.ssmu.ca/">website!</a></p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={MSERT} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>M-SERT <br></br> (514) 398-5216</h2>
              <p>The McGill Student Emergency Response Team (M-SERT) is a volunteer service supported SSMU whose members provide emergency first aid services to McGill University and the Montreal community. Their membership includes over 50 amazing volunteers who hold a certification at the Canadian Red Cross Emergency First Responder level. If you need medical attention during a frosh event, M-SERT will be there to help. For more information, check out their <a href="http://msert.sus.mcgill.ca/about/">website!</a></p>

          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={redfrogs} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>RedFrogs</h2>
              <p>Red Frog volunteers are super nice people that will always have a granola bar or water on hand! They hang out at a designated chill zone (your leaders know where it is) and are always down to chat if you want a break from the night events. For more information, check out their <a href="https://ca.redfrogs.com/">website!</a> </p>

          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={nightline} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>Nightline <br></br> (514) 398-6246</h2>
              <p>McGill Students’ Nightline is a student-run listening service which provides the community with a variety of support.This includes anything from information to crisis management and referrals. You can even call them to ask what’s the best poutine place in Montreal! Their service is confidential, anonymous and non-judgmental. They are an English service that accepts calls from everyone. For more information, check out their <a href="https://nightline.ssmu.ca/">website! </a></p>

           
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={EUSMHC} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>EUS Health</h2>
              <p>Throughout your time at McGill, the Engineering Undergraduate Society provides you with resources made by fellow students. Most importantly, you can file an incident though them at any point for any reason! You can also reach out to both the EUS Equity and Mental Health Committees with questions. For more information and access to the Incident Response Form, check out their <a href="https://equitycommissioner.typeform.com/to/nMg32N">website!</a> </p>


          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={mcgillsecurity} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>McGill Security <br></br> (514) 398-3000</h2>
              <p>The Security Services Team strives to create and maintain a safe environment at both McGill campuses (Downtown and Macdonald Campus) for students, staff, faculty and visitors. They provide support if you are in immediate danger on campus or need assistance reporting to the police. For more information, check out their <a href="https://www.mcgill.ca/campussafety/security-services"> website</a>. </p>


          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={mcgill} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>The Office of the Dean of Students <br></br> (514) 398-4990</h2>
              <p>The Dean, Associate Dean of Students and the staff in the Office of the Dean of Students, assist students during their years at McGill. They are happy to answer any questions or provide advice and referrals to the appropriate individuals or offices on campus. The Dean of Students, as part of a senior collaborative team is committed to promoting your success in academic and personal areas. In addition this office oversees student rights and responsibilities, academic integrity, academic advising, the student disciplinary process and student recognition. For more information, check out their <a href="https://www.mcgill.ca/deanofstudents/">website</a> . </p>


          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={cle} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>McGill Campus Life & Engagement (CL&E)</h2>
              <p>Campus Life& Engagement (CL&E) supports students at the different stages in their life at McGill. By collaborating with various University departments and student groups, CL&E is there to help you connecting to the resources and opportunities that will help you make the most of your time at McGill. You can depend on CL&E as a source for helping you navigate the University, connect to meaningful opportunities, and develop your interests and skills. For more information, check out their <a href="https://www.mcgill.ca/cle/">website</a>.</p>

           
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={mcgillhealth} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}><br></br>McGill Student Health Services</h2>
              <p>Student Health Service provides McGill students with quality, comprehensive health care in a convenient campus location. Their services are specifically geared towards the unique health needs of students, and are delivered by caregivers sensitive to – and experienced with – their particular health concerns. For more information, check out their <a href="https://www.mcgill.ca/wellness-hub/">website</a>.</p>


          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={mcgillhealth} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}><br></br>McGill Counselling Services</h2>
              <p>Whether providing assistance during a crisis, teaching relaxation techniques, or discussing a failed exam or broken heart, the McGill Counselling Service is here to help. This service works to provide students with effective therapy, knowledgeable support, and the opportunity to develop the skills they need to be successful in both school and life. For more information, check out their <a href="https://www.mcgill.ca/wellness-hub/">website</a>.</p>


          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={peersupport} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>Peer support Centre (PSC)</h2>
              <p>Feeling stressed? Lonely? Down? Or just want to chat? The Peer Support Centre is ready to hear you out. The PSC is a student-run service of the Students’ Society of McGill University (SSMU). This service is free to all McGill students and offers one-on-one, confidential and non-judgmental peer support and resource referral. For more information, check out their <a href="http://ssmu.mcgill.ca/psc/">website</a>.</p>


          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={branches} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>Office of the Associate Provost for Equity and Academic Policies</h2>
              <p>Formally known as The Social Equity and Diversity Education (SEDE) Office, the Office of the Associate Provost for Equity and Academic Policies provides information, education and training to all areas of the University in order to cultivate a respectful and supportive campus. By connecting with local organizations, the Office of the Associate Provost for Equity and Academic Policies Program also provides McGill's students and staff with community-based learning experiences that foster leadership and promote a deeper understanding of diversity. For more information, check out their <a href="https://www.mcgill.ca/branches-program/">website</a>.</p>

           
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={osd} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}><br></br>Office for Students with Disabilities (OSD)</h2>
              <p>Do you have a disability, mental health condition, chronic illness or other impairment that may impact your McGill experience? Visit the Office for Students with Disabilities to find out about the services and resources available to students through the OSD. For more information, check out their <a href="https://www.mcgill.ca/osd/">website</a>.

If you have any questions or concerns about accessibility during Frosh, please reach out to the Engineering Inclusivity Coordinator for more details at oweek.inclusivity@mcgilleus.ca</p>


          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={osverse} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}><br></br>Office for Sexual Violence Response, Support and Education (OSVERSE)</h2>
              <p>This McGill service provides confidential, non-judgmental and non-directional support and education to students, faculty and staff of all genders who have been impacted by sexual violence. Their services include crisis support for incidents of sexual & gender-based violence, reporting information, referrals and accompaniment to internal and external resources and they can be accessed in both French and English. For more information, check out their <a href="https://www.mcgill.ca/osvrse/our-office">website</a>.</p>


          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <img src={sacomms} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}> <br></br> <br></br>  <br></br>Sexual Assault Centre of the McGill Students’ Society (SACOMSS)</h2>
              <p>The Sexual Assault Centre of the McGill Students’ Society (SACOMSS) is a volunteer-run organization committed to assist survivors of sexual assault and their allies through direct support, advocacy, and outreach. For more information, check out their <a href="http://www.sacomss.org/wp/">website</a>.</p>


          </Paper>
        </Grid>
      </Grid>
      
    </div>
    </div>
    <div className="show-small2">
      <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item md={1}>
          <Paper className={classes.paper}>
              <img src={Drivesafe} alt="logo"/>
              <h2 className={classes.paragraph}>Drivesafe <br></br>(514) 398-8040</h2>
              <p >This student-run service of the Students’ Society of McGill University (SSMU) drives students safely anywhere on the island of Montreal for free. Don’t hesitate to give them a call during Frosh if you are looking for a safe way to get home! Leaders and staff can also call them for you at night events. For more information, check out their <a href="https://drivesafe.ssmu.ca/">website!</a></p>
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={walksafe} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>Walksafe <br></br> (514) 398-2498</h2>
              <p>This student-run SSMU service has the goal of bringing you home safely. During and after Frosh, we encourage you to never walk home alone. If none of your friends or Leaders are around, give them a call and one of their volunteers will walk you home for free. Leaders and staff on duty can also call them for you at night events. For more information, check out their <a href="https://walksafe.ssmu.ca/">website!</a></p>
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={MSERT} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>M-SERT <br></br> (514) 398-5216</h2>
              <p>The McGill Student Emergency Response Team (M-SERT) is a volunteer service supported SSMU whose members provide emergency first aid services to McGill University and the Montreal community. Their membership includes over 50 amazing volunteers who hold a certification at the Canadian Red Cross Emergency First Responder level. If you need medical attention during a frosh event, M-SERT will be there to help. For more information, check out their <a href="http://msert.sus.mcgill.ca/about/">website!</a></p>

          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={redfrogs} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>RedFrogs</h2>
              <p>Red Frog volunteers are super nice people that will always have a granola bar or water on hand! They hang out at a designated chill zone (your leaders know where it is) and are always down to chat if you want a break from the night events. For more information, check out their <a href="https://ca.redfrogs.com/">website!</a> </p>

          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={nightline} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>Nightline <br></br> (514) 398-6246</h2>
              <p>McGill Students’ Nightline is a student-run listening service which provides the community with a variety of support.This includes anything from information to crisis management and referrals. You can even call them to ask what’s the best poutine place in Montreal! Their service is confidential, anonymous and non-judgmental. They are an English service that accepts calls from everyone. For more information, check out their <a href="https://nightline.ssmu.ca/">website! </a></p>

           
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={EUSMHC} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>EUS Health</h2>
              <p>Throughout your time at McGill, the Engineering Undergraduate Society provides you with resources made by fellow students. Most importantly, you can file an incident though them at any point for any reason! You can also reach out to both the EUS Equity and Mental Health Committees with questions. For more information and access to the Incident Response Form, check out their <a href="https://equitycommissioner.typeform.com/to/nMg32N">website!</a> </p>


          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={mcgillsecurity} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>McGill Security <br></br> (514) 398-3000</h2>
              <p>The Security Services Team strives to create and maintain a safe environment at both McGill campuses (Downtown and Macdonald Campus) for students, staff, faculty and visitors. They provide support if you are in immediate danger on campus or need assistance reporting to the police. For more information, check out their <a href="https://www.mcgill.ca/campussafety/security-services"> website</a>. </p>


          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={mcgill} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>The Office of the Dean of Students <br></br> (514) 398-4990</h2>
              <p>The Dean, Associate Dean of Students and the staff in the Office of the Dean of Students, assist students during their years at McGill. They are happy to answer any questions or provide advice and referrals to the appropriate individuals or offices on campus. The Dean of Students, as part of a senior collaborative team is committed to promoting your success in academic and personal areas. In addition this office oversees student rights and responsibilities, academic integrity, academic advising, the student disciplinary process and student recognition. For more information, check out their <a href="https://www.mcgill.ca/deanofstudents/">website</a> . </p>


          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={cle} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>McGill Campus Life & Engagement (CL&E)</h2>
              <p>Campus Life& Engagement (CL&E) supports students at the different stages in their life at McGill. By collaborating with various University departments and student groups, CL&E is there to help you connecting to the resources and opportunities that will help you make the most of your time at McGill. You can depend on CL&E as a source for helping you navigate the University, connect to meaningful opportunities, and develop your interests and skills. For more information, check out their <a href="https://www.mcgill.ca/cle/">website</a>.</p>

           
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={mcgillhealth} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}><br></br>McGill Student Health Services</h2>
              <p>Student Health Service provides McGill students with quality, comprehensive health care in a convenient campus location. Their services are specifically geared towards the unique health needs of students, and are delivered by caregivers sensitive to – and experienced with – their particular health concerns. For more information, check out their <a href="https://www.mcgill.ca/wellness-hub/">website</a>.</p>


          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={mcgillhealth} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}><br></br>McGill Counselling Services</h2>
              <p>Whether providing assistance during a crisis, teaching relaxation techniques, or discussing a failed exam or broken heart, the McGill Counselling Service is here to help. This service works to provide students with effective therapy, knowledgeable support, and the opportunity to develop the skills they need to be successful in both school and life. For more information, check out their <a href="https://www.mcgill.ca/wellness-hub/">website</a>.</p>


          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={peersupport} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>Peer support Centre (PSC)</h2>
              <p>Feeling stressed? Lonely? Down? Or just want to chat? The Peer Support Centre is ready to hear you out. The PSC is a student-run service of the Students’ Society of McGill University (SSMU). This service is free to all McGill students and offers one-on-one, confidential and non-judgmental peer support and resource referral. For more information, check out their <a href="http://ssmu.mcgill.ca/psc/">website</a>.</p>


          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={branches} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}>Office of the Associate Provost for Equity and Academic Policies</h2>
              <p>Formally known as The Social Equity and Diversity Education (SEDE) Office, the Office of the Associate Provost for Equity and Academic Policies provides information, education and training to all areas of the University in order to cultivate a respectful and supportive campus. By connecting with local organizations, the Office of the Associate Provost for Equity and Academic Policies Program also provides McGill's students and staff with community-based learning experiences that foster leadership and promote a deeper understanding of diversity. For more information, check out their <a href="https://www.mcgill.ca/branches-program/">website</a>.</p>

           
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={osd} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}><br></br>Office for Students with Disabilities (OSD)</h2>
              <p>Do you have a disability, mental health condition, chronic illness or other impairment that may impact your McGill experience? Visit the Office for Students with Disabilities to find out about the services and resources available to students through the OSD. For more information, check out their <a href="https://www.mcgill.ca/osd/">website</a>.

If you have any questions or concerns about accessibility during Frosh, please reach out to the Engineering Inclusivity Coordinator for more details at oweek.inclusivity@mcgilleus.ca</p>


          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={osverse} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}><br></br>Office for Sexual Violence Response, Support and Education (OSVERSE)</h2>
              <p>This McGill service provides confidential, non-judgmental and non-directional support and education to students, faculty and staff of all genders who have been impacted by sexual violence. Their services include crisis support for incidents of sexual & gender-based violence, reporting information, referrals and accompaniment to internal and external resources and they can be accessed in both French and English. For more information, check out their <a href="https://www.mcgill.ca/osvrse/our-office">website</a>.</p>


          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>
          <img src={sacomms} alt="logo"/>
          <br></br>
          <h2 className={classes.paragraph}> <br></br> <br></br>  <br></br>Sexual Assault Centre of the McGill Students’ Society (SACOMSS)</h2>
              <p>The Sexual Assault Centre of the McGill Students’ Society (SACOMSS) is a volunteer-run organization committed to assist survivors of sexual assault and their allies through direct support, advocacy, and outreach. For more information, check out their <a href="http://www.sacomss.org/wp/">website</a>.</p>


          </Paper>
        </Grid>
      </Grid>
      
    </div>
    </div>

      <section className="finish">
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
export default Resources;