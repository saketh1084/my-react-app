import React from 'react'
import { NavLink } from 'react-router-dom'



const Same = (props) => {
  return (
    <div>
        <div className="mainSection">
        <div className="contentBox">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="btnBox">
            <div className="btn">
            <NavLink to="/about" className="readMore" 
            activeClassName="activeItem">{props.btn}</NavLink>
            </div>
          </div>
        </div> 
        <div className="imgContainer" >
         <img src={props.imgsrc}alt="home"
        /* style={{width: '70%', height: 'auto', maxWidth:'1500px', maxHeight: '1000px'}}*//>

        </div>
        </div>
      
    </div>
  )
}

export default Same
