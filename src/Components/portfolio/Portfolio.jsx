import React from 'react'
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="work container section" id="work">
        <h2 className="section__title">Recent Works</h2>

        <div className="work__filters">
            <span className="work__item"></span>
            <span className="work__item"></span>
            <span className="work__item"></span>
            <span className="work__item"></span>
            <span className="work__item"></span>
        </div>
    </section>
  )
}

export default Portfolio