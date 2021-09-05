import React from 'react';
import './About.css';
import ArtistPic from '../images/artist-pic.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="offering">
        <h1><strong>One-Of-A-Kind Handmade Jewelry · Custom-Designed Jewelry · Intuitive Tarot Card Readings</strong></h1>
      </div>
      <div className="intention">
        <h1>Intention</h1>
        <h3><em>Together the Spider and Crow weave a spell of dream magic and sacred journeys.</em></h3>
        <p><em>"</em><strong>Hello! Beautiful Soul! Yes, You! &hearts;</strong></p>
        <p>I created this thinking of you.</p>
        <p>Every piece is one of a kind, <em>handmade</em> with intention and blessings to help assist you with your journey towards your spiritual truth and highest good!</p>
        <p>Some carry with them prayers, mantras, insights, wishes - All uniquely created by me with intuitive guidance and tremendous <strong><em>Love</em></strong> - for you!</p>
        <p>Please connect and share your journey.<em>"</em></p>
        <p id="signature"><strong><em>&hearts; Veronica Lynn</em></strong></p>
      </div>
      <div className="artist-bio">
        <img id="artist-pic" src={ArtistPic} alt="" />
        <h1>About the Artist</h1>
        <p>Veronica Lynn is a Mother, Grandmother, Artist and Spiritual Seeker. She loves music, adventure, sacred geometry and all things celestial. When not working on new and exciting challenges, Veronica's ideal fun is fireside with loved ones philosophizing about GOD, Jazz, and how to better serve humanity.</p>
      </div>
    </section>
  )
}
