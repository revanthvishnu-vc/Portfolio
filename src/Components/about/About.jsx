import React from 'react'
import "./about.css";
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';

const about = () => {
  return (
    <section className='about container section' id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__decription">I am Revanth Vishnu Ravichandran, Web developer from Coimbatore. I have rich experience in web site designing and building and customization.</p>
            <a href="https://drive.google.com/file/d/1buMOjpTPW739RynSKHJf1hm4kO53WI-n/view?usp=sharing" className="btn">Download Resume</a>
          </div>
          <div className="about__skills grid">
            
            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__names">HTML & CSS</h3> 
                  <span className="skills__level ">Expert</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage expert"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__names">Tailwind</h3> 
                  <span className="skills__level ">Expert</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage expert"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__names">JavaScript</h3>
                  <span className="skills__level ">Expert</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage expert"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__names">React.js</h3>
                  <span className="skills__level">Advanced</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage advanced"></span>
              </div>
            </div>

            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__names">Node.js</h3>
                  <span className="skills__level ">Advanced</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage advanced"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    <AboutBox />
    </section>
  )
}

export default about