import React from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailJs from 'emailjs-com'

export const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailJs.sendForm('service_y3ax5na','template_rt95ulg', form.current, 'yByQDNzjTA3eO4jWw')
    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__options-icons'/>
            <h4>Email</h4>
            <h5>bhavin17.panchal@gmail.com</h5>
            <a href="mailto:bhavin17.panchal@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__options-icons'/>
            <h4>Messanger</h4>
            <h5>Bhavin Panchal</h5>
            <a href="https://m.me/bhavin17.panchal" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__options-icons'/>
            <h4>WhatsApp</h4>
            <h5>+918689893189</h5>
            <a href="https://api.whatsapp.com/send?phone+918689893189" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name="email" placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contacts;