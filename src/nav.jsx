import React from 'react';
import{ Link, Route, Routes} from'react-router-dom';
import AboutUs from './AboutUs';
import OurSpace from'./OurSpace';
import Curriculm from './Curriculm';
import Admission from'./Admission';
import Contact from './Contact';
function Nav() {
  return (
    <div className='nav0'>
        <div className='nav1'>
            yenopoyaworld@email.com
        
        <div className='nav2'>
        
            <Link className='lin' to="/AboutUs">About Us</Link>
            <Link className='lin'  to="/OurSpace">Our Space</Link>
            <Link className='lin'  to="/Curriculm">Curriculum</Link>
            <Link className='lin'  to="/Admission">Addmissions</Link>
            <Link className='lin'  to="/Contact">Contact Us</Link>
        </div></div>
        </div>
  
  )
}

 function App1() {
  return(
    <>
    <Nav/>
    
      <Routes>
              <Route path="/AboutUs" element={<AboutUs/>}/>
              <Route path="/OurSpace"  element={<OurSpace/>}/>
              <Route path="/Curriculm" element={<Curriculm/>}/>
              <Route path="/Admission" element={<Admission/>}/>
              <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    
    </>
  )
  
 }

export default App1