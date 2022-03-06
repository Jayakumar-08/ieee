
import './App.css';
import Event from './Event';
import Navbar from './Navbar';
import Container from './Container';
import React,{useState} from 'react';
import { data } from './data';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
const [events1,setEvent1]=useState(data[0]);
const [events2,setEvent2]=useState(data[1]);
const [events3,setEvent3]=useState(data[2]);
const [events4,setEvent4]=useState(data[3]);
const [events5,setEvent5]=useState(data[4]);
const [events6,setEvent6]=useState(data[5]);
console.log(events2[0].imageUrl)




  return (
    <div className="App">
      <Event/>
      <Navbar />
      <div className='info'>
        <div className='mainEvent'>
        <div className='info_header'>
          <h2>CIRCUITS</h2>
        </div>
        <div className='info_cards'>
          <div className='event1'>
         {
           events1.map((event)=>{
             return <Container key={event.id} imageUrl={event.imageUrl}
             description={event.discription} title={event.card_title}
             />
           })
         }
         </div>
         
         </div>
         
    </div>
    <div className='mainEvent'>
        <div className='info_header'>
          <h2>BRAINIAC</h2>
        </div>
        <div className='info_cards'>
          <div className='event1'>
         {
           events2.map((event)=>{
             return <Container key={event.id} imageUrl={event.imageUrl}
             description={event.discription} title={event.card_title}
             />
           })
         }
         </div>
         
         </div>
         
         
    </div>
    <div className='mainEvent'>
        <div className='info_header'>
          <h2>QUIZZARDS</h2>
        </div>
        <div className='info_cards'>
          <div className='event1'>
         {
           events3.map((event)=>{
             return <Container key={event.id} imageUrl={event.imageUrl}
             description={event.discription} title={event.card_title}
             />
           })
         }
         </div>
         
         </div>
         
    </div>
    <div className='mainEvent'>
        <div className='info_header'>
          <h2>DESIGN</h2>
        </div>
        <div className='info_cards'>
          <div className='event1'>
         {
           events4.map((event)=>{
             return <Container key={event.id} imageUrl={event.imageUrl}
             description={event.discription} title={event.card_title}
             />
           })
         }
         </div>
         
         </div>
         
    </div>
     <div className='mainEvent'>
        <div className='info_header'>
          <h2>CODING</h2>
        </div>
        <div className='info_cards'>
          <div className='event1'>
         {
           events5.map((event)=>{
             return <Container key={event.id} imageUrl={event.imageUrl}
             description={event.discription} title={event.card_title}
             />
           })
         }
         </div>
         
         </div>
         
    </div>
     <div className='mainEvent'>
        <div className='info_header'>
          <h2>MANAGEMENT</h2>
        </div>
        <div className='info_cards'>
          <div className='event1'>
         {
           events6.map((event)=>{
             return <Container key={event.id} imageUrl={event.imageUrl}
             description={event.discription} title={event.card_title}
             />
           })
         }
         </div>
         
         </div>
         
    </div>
    
    </div>
    <div className='footer'>
      <div className='footer_left'>
        <img className='college_logo' src='https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png' alt='psg'/>
        <div className='footerLeft_info'>
          <h5><strong>STUDENTS UNION</strong></h5>
          <h5><strong>PSG COLLEGE OF TECHNOLOGY</strong></h5>
          <h5>Copyrights © 2022 - All Rights Reserved</h5>

        </div>

      </div>
      <div className='footer_right '>
        <FacebookIcon className='fb icon'/>
        <InstagramIcon className='insta icon'/>
        <WhatsAppIcon className='whats icon'/>
        <YouTubeIcon className='youtube icon'/>
        <EmailIcon className='email icon'/>
        <LinkedInIcon className='linkedin icon'/>


      </div>
    </div>
    
    </div>
  );
}

export default App;
