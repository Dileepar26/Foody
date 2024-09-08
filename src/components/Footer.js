import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <InstagramIcon />
          <EmailIcon/>
        </div>
        <p> Foody &copy; 2023</p>

    </div>
    
  )
}

export default Footer