import React from 'react';
import './about.css';
import ME from "../../assets/bhavin2.JPEG"
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VsFolderLibrary} from 'react-icons/vsc'



export const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='about-me'  />
            </div>
          </div>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>
                  Experience
                </h5>
                <small>2+ Years working</small>
              </article>
              <article className='about__card'>
                <FiUser className='about__icon' />
                <h5>
                  Clients
                </h5>
                <small>10+ world wide</small>
              </article>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>
                  Projects
                </h5>
                <small>15+ projects</small>
              </article>
             
            </div>
              <p>
                2+ years of experience Web Developer specializing in back end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, PHP, JavaScript, Jquery Ajax, CSS, MySQL,Tailwind. Strong background in Client Communication with Project Management
              </p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}
export default About;