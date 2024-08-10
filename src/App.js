import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
// import FeatureSection from './Components/FeatureSection';
import AboutUs from './Components/AboutUs';
import Layout from './Components/Layout'; // Import the Layout component
import AdminDashboard from './Components/AdminDashboard';
import BecomeTutor from './Components/BecomeTutor';
import CardInitial from './Components/CardInitial';
import ContactUs from './Components/ContactUs';
import HelpCenter from './Components/HelpCenter';
import CardComponent from './Components/CardComponent';
// import Initial from './Components/Initial';
import Learner from './Components/Learner';
import Privacy from './Components/Privacy';
import Teacher from './Components/Teacher';
// import Landing from './Components/Landing';
import Adminlog from './Components/Adminlog';
// import FeatureSection from './Components/FeatureSection';
// import Subject from './Components/Subject';
// import Tutor from './Components/Tutor';
import HomepageMain from './Components/HomepageMain';
import TopCities from './Components/TopCities';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/home' element={<Layout><HomepageMain/></Layout>} /> */}
          <Route path='/'element={<Layout><HomepageMain/><BecomeTutor/></Layout>}/>
          <Route path='/admindashboard'element={<Layout><AdminDashboard/></Layout>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup'element={<Signup/>}/>
          <Route path='/adminlog'element={<Adminlog/>} />
          <Route path='/aboutus' element={<Layout><AboutUs/></Layout>} />
          <Route path='/contact' element={<Layout><ContactUs/></Layout>}/>
          <Route path='/help'element={<Layout><HelpCenter/></Layout>}/>
          <Route path='/card' element={<Layout><CardInitial/></Layout>} /> 
          <Route path='/card'element={<Layout><CardComponent/></Layout>} />
          {/* <Route path='/initial'element={<Layout><Initial/></Layout>} /> */}
          <Route path='/learner'element={<Layout><Learner/></Layout>} />
          <Route path='/privacy'element={<Layout><Privacy/></Layout>} />
          <Route path='/teacher'element={<Layout><Teacher/></Layout>} />
          <Route path='/topcity' element={<Layout><TopCities/></Layout>} />

        </Routes>
      </Router>
      
      
    </div>
  );
};

export default App;





