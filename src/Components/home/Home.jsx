import React from 'react'
import "./home.css"
import Me from "../../assets/Revanth.jpeg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const home = () => {
  return (
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" style={{ height:'200px'}}/>
          <h1 className="home__name">Revanth Vishnu</h1>
          <span className="home__role">Front-end Developer</span>

          <HeaderSocials />

          <a href="#contact" className="btn">Hire Me</a>

          <ScrollDown />


        </div>
      </section>
    )
}

export default home