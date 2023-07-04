import React from 'react'
import './portfolio.css';
import img1 from '../../assets/img1.png';

const Portfolios = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1}  alt="1"/>
          </div>
         
          <h3>
            This is portfolio item Title
          </h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1}  alt="1"/>
          </div>
         
          <h3>
            This is portfolio item Title
          </h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1}  alt="1"/>
          </div>
         
          <h3>
            This is portfolio item Title
          </h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1}  alt="1"/>
          </div>
         
          <h3>
            This is portfolio item Title
          </h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1}  alt="1"/>
          </div>
         
          <h3>
            This is portfolio item Title
          </h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1}  alt="1"/>
          </div>
         
          <h3>
            This is portfolio item Title
          </h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolios