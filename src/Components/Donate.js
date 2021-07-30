import React from 'react'
import venmoQR from "../images/venmo-qr.jpg"
import "./Donate.css"

export default function Donate() {
  return (
    <section id="donate" className="donate">
      <hr />
      <div>
        <h1>Donate</h1>
        <img id="venmo-qr" src={venmoQR} alt="" />
      </div>
    </section>
  )
}
