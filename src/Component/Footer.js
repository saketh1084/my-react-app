import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Css/FooterStyle.css'

const Footer = () => {
  return (
    <div>
   <footer>
    <div className="container container-flex">
        <div className='icons'>
            <TwitterIcon className='icon'/>
            <FacebookIcon className='icon'/>
            <InstagramIcon className='icon'/>
            <LinkedInIcon className='icon'/>
             </div>
        <div className="line">
            <hr/>
            <hr/>
            </div>
            <div className="copyright">
            <p>All rights reserved &copy;</p>
            <p>Made with Love by Saketh</p>
        </div>
    </div>
   </footer>
    </div>
  )
}

export default Footer
