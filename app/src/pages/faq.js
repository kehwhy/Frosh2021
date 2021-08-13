import React , { useState } from 'react'
import FAQ from '../components/common/FAQ.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Faq() {

    const [faqs, setfaqs] = useState([
    
        {
            question: 'What is Frosh?',
            answer: 'Frosh is a four-day event for new undergraduate students at McGill. During Frosh new students get the chance to meet other new students, connect with upper year student-leaders, and get introduced to the McGill Engineering community.',
            open: true
          },
          {
            question: 'When is Frosh?',
            answer: 'Frosh takes place from August 27th - August 30th 2020. Frosh is one of the events of Orientation Week, which takes place from August 26th - August 30th and classes will begin on September 1st.',
            open: false
          },
          {
            question: 'What happens during frosh?',
            answer: 'Frosh is made up of a variety of social events, completely organized by students. The events of hybrid frosh will be taking place both online via Discord, Twitch and Zoom and in-person in Montreal in the neighborhoods near McGill campus. You’ll be attending all the events with your group of fellow engineers lead by upper-year engineering students. For a full outline of what happens at each of our events, see the schedule on our social media and under the "Schedule" tab.',
            open: false
          },
          
          {
            question: 'How do I register?',
            answer: 'Registration for all Froshes takes place through the same online system, which you can access through the "Register" button on the home page. Registration is open up until the first day of Frosh (August 27th).',
            open: false
          },
          {
            question: 'Why should I do Frosh?',
            answer: 'Frosh is your first and best opportunity to get acquainted with McGill Engineering kick-start your McGill career. You’ll meet older engineering student mentors and new engineering students like yourself. The friendships you make during Frosh will last through the rest of your McGill career and beyond.',
            open: false
          },
          {
            question: 'How much does Frosh cost?',
            answer: 'This year we have 2 ticket types: online tickets (15$) and hybrid tickets (125$). With an online ticket you get access to all of our online events and some exciting Engineering frosh exclusive merchandise. With the hybrid ticket, you get access to all of the online events, exclusive merchandise as well as a number of in-person activities that will take place throughout Frosh.',
            open: false
          },
          {
            question: 'Are Frosh events mandatory?',
            answer: 'Not at all. We encourage you to participate in all Frosh events, but if you can’t make it or need to take a break that’s absolutely okay. If possible, please tell your Frosh leaders that you won’t be attending so they don’t wait for you.',
            open: false
          },
          {
            question: 'Do I have to register?',
            answer: 'Yes. To attend any Frosh events, you must register online.',
            open: false
          },
          {
            question: 'I made a mistake on my registration, how can I correct it?',
            answer: 'Send us an email to oweek@mcgilleus.ca at any time to correct or modify your registration.',
            open: false
          },
          
          {
            question: 'What is the EUS?',
            answer: 'The Engineering Undergraduate Society (EUS) is a student-led organization that represents engineering and architecture undergraduate students at McGill University. The EUS supports its students through organized funding for improvement of student life and academics, representation through council, and coordinating an immense amount of opportunities to get involved. Find out more at wiki.mcgilleus.ca, by reading the EUS Handbook that you’ll receive early in the year, or by dropping by the EUS Office in McConnell Room 7!',
            open: false
          },
          {
            question: 'Who are Frosh Coordinators?',
            answer: 'We are a group of 11 upper-year engineering students who spend their summer organizing the entirety of Frosh. We publicize Frosh to incoming students, find sponsorship, come up with fun events, and hire and train Frosh Leaders and O-Staff.',
            open: false
          },
          {
            question: 'Who are Leaders and O-Staff?',
            answer: 'Frosh Leaders are upper-year students who have been hired to guide you throughout Frosh. Your Leaders will also be your mentors throughout your first year at McGill, so be sure to get their contact information during Frosh and hit them up with any questions during or after Frosh! O-Staff are upper-year students who have been hired to help the Coordinators run all of the events at Frosh.They have all received extensive training, so feel free to approach them at any time, and they will be happy to answer your questions!',
            open: false
          },
          {
            question: 'Who are Froshies?',
            answer: 'You! A "Froshie" is anyone who is a participant in Frosh.',
            open: false
          },
          {
            question: 'Who can participate in Frosh?',
            answer: 'Engineering Frosh is open to any student entering McGill for their first year of an undergraduate degree in the faculty of Engineering, including Architecture. Frosh welcomes students of all ages, but you only get one chance - you can’t participate in Frosh in any year after your first one (however, you can apply to be a Leader, O-Staff, or Coordinator!). If you are a transfer or exchange student coming to McGill for your first year in Engineering or Architecture, you are welcome to participate in Frosh. ',
            open: false
          },
          {
            question: 'I’m not in Engineering, can I sign up for Engineering Frosh?',
            answer: 'Probably not. Students are strongly suggested to participate in the Frosh of their faculty, or in a non-Faculty Frosh, so they can make connections with people they will be working alongside throughout their McGill career. If you have unusual circumstances and think that Engineering Frosh would be the best fit for you (e.g. you transferred Faculties after registering for Frosh), send an email to oweek@mcgilleus.ca.',
            open: false
          },
          {
            question: 'I have a concern that I would like addressed before registering, how can I contact a Frosh Coordinator?',
            answer: 'Any concerns can be sent to oweek@mcgilleus.ca, and the appropriate Coordinator will reply to your question.',
            open: false
          },
          {
            question: 'Will there be any in-person events during the 2021 fall semester?',
            answer: 'With the changing rules, it is not entirely clear what type of events will be allowed during the fall 2021 semester. Under normal circumstances, there are a variety of events hosted by the EUS every semester but they will only take place if and when governement regulations allow them and if they can be done safely. Find out more by checking the EUS Wiki.',
            open: false
          },
        {
          question: 'Where can I learn more about groups and clubs on campus?',
          answer: "last year's coordinators put together an involvement video series which showcases most clubs, committees and design team that you can join in the EUS, the playlist can be found on our Youtube channel (link in the footer) and on the EUS website. There is also a ton of information on the EUS Wiki.",
          open: false
        },
          

        
    ]);
    
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
    }
    
       


    return (
    <div>
     
        <div className="faqs">
        <p className="questions">QUESTIONS?</p>
        <p className="answers">We got answers.</p>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
     
        </div>
  
    
    );
    
}
export default Faq;