import React from 'react';
import "./App.css";
import Sidebar from './Components/sidebar/Sidebar.jsx';
import Home from './Components/home/Home.jsx';
import About from './Components/about/About.jsx';
import Contact from './Components/contact/Contact.jsx';
import Resume from './Components/resume/Resume.jsx';

const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
