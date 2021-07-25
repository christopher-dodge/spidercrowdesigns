import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>
      <h2>Feel free to reach out</h2>
      <h3>Have a question, comment, conern, drop us a line and we'll get back to you as soon as we can.</h3>
      <form className="contact-form" action="">
        <div className="form-row justify-content-center">
          <input type="text" name="name" className="" placeholder="Full Name" />
        </div>
        <input name="bot-field" type="email" style={{visibility: "hidden", display: "none"}} />
        <input type="email" name="email" class="form-control" placeholder="Email" />
        <textarea name="message" className="form-control" rows="5" placeholder="Message" />
        <button type="submit" class="btn">Send Message</button>
      </form>
    </section>
  )
}
