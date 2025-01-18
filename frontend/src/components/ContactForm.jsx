import React , {useState} from 'react'
import './contact.css'


function ContactForm() {

  return (

    <>

    <div className='contact'>

    <h2 className='contact-title'>Contact Us</h2>

    <div className="contact-container">

        
            <iframe 
            
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583797917!2d91.81983540399067!3d24.90005834785076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1704535208090!5m2!1sen!2sbd" 
            width="70%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">

            </iframe>  


            <div className="contact-form">

              <form  action="https://formspree.io/f/moqgqred" method="POST" className="contact-inputs"> 

                  <h3>Get in touch (Phone - +880172105509)</h3>

                <input type='text'  
                 placeholder='Enter your name...'
                required
                autoComplete="off"
                />

                <input type='text'  
                placeholder='Enter your email...'
                required
                autoComplete="off"/>

                <textarea
                name="Message"
                cols="30"
                rows="5"
                required
                autoComplete="off"
                placeholder="Enter your message"></textarea>

                <input type="submit" value="send" className='submit'/>

                </form>

            </div>

    </div>

    </div>


    </>
  )
}

export default ContactForm