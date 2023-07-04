import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'
import { useState, useEffect } from 'react';

export const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [experience2, setBackExperience] = useState([]);
  const [experience3, setCMSExperience] = useState([]);
  const [experience4, setThirdpartyExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/front-experience")
      .then((response) => response.json())
      .then((data) => setExperience(data.experience))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/back-experience")
      .then((response) => response.json())
      .then((data1) => setBackExperience(data1.experience2))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/cms")
      .then((response) => response.json())
      .then((data2) => setCMSExperience(data2.experience3))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/third-party")
      .then((response) => response.json())
      .then((data3) => setThirdpartyExperience(data3.experience4))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section id='experience'>
      <h5>
        What Skills I Have
      </h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Fronend Development</h3>
          <div className='experience__content'>
          {experience.map((ex) => (
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>{ex.skill_name}</h4>
              <small className='text-light'>{ex.skill_type}</small>
              </div>
            </article>
            ))}
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JQuery</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article> */}
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          
          <div className='experience__content'>
          {experience2.map((bex) => (
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>{bex.skill_name}</h4>
                <small className='text-light'>{bex.skill_type}</small>
              </div>
            </article>
            ))}

            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article> */}
          </div>
        </div>
        
      </div>
      <div className='container experience__container cms'>
          <div className='experience__frontend'>
            <h3>CMS & Technologies</h3>
            <div className='experience__content'>
            {experience3.map((cex) => (
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>{cex.skill_name}</h4>
                <small className='text-light'>{cex.skill_type}</small>
              </div>
            </article>
            ))}

              {/*<article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Filament</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
               <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Statamic</h4>
                  <small className='text-light'>Intermediate</small>
                </div>

              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Backpack</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Voyager</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article> */}
            </div>
          </div>
          <div className='experience__backend'>
            <h3>Third Party services</h3>
            <div className='experience__content'>
            {experience4.map((dex) => (
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>{dex.skill_name}</h4>
                <small className='text-light'>{dex.skill_type}</small>
              </div>
            </article>
            ))}
              {/* <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Typesense</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Stripe Payment</h4>
                  <small className='text-light'>Intermediate</small>
                </div>

              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Etsy</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Shopify</h4>
                  <small className='text-light'>Exprienced</small>
                </div>
              </article> */}
            </div>
          </div>
        </div>
    </section>
  )
}
export default Experience;