import React from 'react'
import thirdimg from '../Images/thirdimg.png'
import fourthimg from '../Images/fourthimg.png'
import { NavLink } from 'react-router-dom'
import '../Css/ServiceStyle.css';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <div className ="services">
        <div className="card">
          <h2>Web developement</h2>
          <img src={thirdimg}alt="service1"
          className='serviceImg'/>
          <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit. corporis, aut.</p>
          <div className="btnBox">
            <div className="btn">
              <NavLink to ="/about" className="readmore">
                Start Learning
              </NavLink>
            </div>
          </div>
          </div>
           
          <div className="card">
          <h2>Web Designing</h2>
          <img src={fourthimg}alt="service1"
          className='serviceImg'/>
          <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit. corporis, aut.</p>
          <div className="btnBox">
            <div className="btn">
              <NavLink to ="/about" className="readmore">
                Start Learning
              </NavLink>
            </div>
          </div>
           </div>

           <div className="card">
          <h2>Full Stack Developement</h2>
          <img src={thirdimg}alt="service1"
          className='serviceImg'/>
          <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit. corporis, aut.</p>
          <div className="btnBox">
            <div className="btn">
              <NavLink to ="/about" className="readmore">
                Start Learning
              </NavLink>
            </div>
          </div>
          </div>
          
      </div>
    </div>
  )
}

export default Services
