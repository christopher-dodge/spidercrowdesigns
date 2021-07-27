import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <hr />
      <div className="contact-form">
        <h1>Contact</h1>
        <h2>Have a question, comment, conern, drop us a line and we'll get back to you as soon as we can.</h2>
        <form className="" action="">
          <input type="text" name="name" className="" placeholder="Name" required />
          <input name="bot-field" type="email" style={{visibility: "hidden", display: "none"}} />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" rows="5" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}