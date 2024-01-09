import React from 'react';
import homeimg from '../Images/homeimg.png';
import '../Css/HomeAbout.css';
import Same from './Same';

const Home = () => {
  return (
    <div className='mainSection'> 
      <Same
        title="Learning made easy"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id, totam nesciunt Nisi explicabo possimus quasi deserunt blanditiis assumenda solari bus in."
        imgsrc={homeimg}
        btn="Read more"
      />
    </div>
  );
};

export default Home;
