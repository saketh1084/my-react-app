import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from'./Component/About'
import Services from'./Component/Services'
import Contact from'./Component/Contact'
import Policy from'./Component/Policy'
import Error from './Component/Error'
import List from './Component/List';
import Footer from './Component/Footer';


const App = () => {
  return (
    <div>
      <List/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/policy" element={<Policy/>}/>
       <Route path="*" element={<Error />} />
     </Routes>
    <Footer />
    </div>
  );
};

export default App;
