import React from 'react';
import secondimg from '../Images/secondimg.png';
import Same from './Same';
import '../Css/HomeAbout.css';

const About = () => {
  return (
    <div className='mainSection'>
      <Same
        title="Know More About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id, totam nesciunt Nisi explicabo possimus quasi deserunt blanditiis assumenda solari bus in."
        imgsrc={secondimg}
        btn="Know more"
      />
    </div>
  );
};

export default About;
