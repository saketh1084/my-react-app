import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/Contact.css'

const Contact = () => {
  return (
    <div>
     <h1>Contact us</h1> 
     <form className="contact">
      <div> 
        <label htmlFor='name'>Name</label>
        <input type="text" placeholder="Enter your name"/>
      </div>
      <div> 
        <label htmlFor='name'>Email</label>
        <input type="email" placeholder="Enter your email"/>
      </div>
      <div> 
        <label htmlFor='password'>password</label>
        <input type="password" placeholder="Enter your password"/>
      </div>
      <div> 
        <label htmlFor='mobile'>Mobile</label>
        <input type="mobile" placeholder="Enter your mobile"/>
      </div>
      <div className="btnBox">
            <div className="btn">
              <NavLink to ="/Contact" className="Submitdetails">
                Submit Details
              </NavLink>
            </div>
          </div>
     </form>
    </div>
  )
}

export default Contact
