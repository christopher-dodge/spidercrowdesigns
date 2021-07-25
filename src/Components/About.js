import React from 'react';
import './About.css';
import ArtistPic from '../images/artist-pic.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="intention">
        <h1>Intention</h1>
        <p>Barista brewed turkish black blue mountain, variety, flavour bar  latte that white. Instant iced macchiato, so black whipped caramelization, seasonal extraction in decaffeinated robust. To go, coffee, to go, instant cappuccino spoon, that percolator fair trade dark brewed. Whipped extraction, est, café au lait latte and id black carajillo aftertaste plunger pot brewed. Crema caramelization single origin, half and half caramelization flavour cinnamon mug dripper espresso wings.</p>
      </div>
      <div className="artist-bio">
        <img id="artist-pic" src={ArtistPic} alt="" />
        <h1>About the Artist</h1>
        <p>Akarm dhanurasan baddha konasana catuspadapitham marichyasana ii matsyasana chin lock ashtanga namaskara dhanurasana energy center in the subtle body associated in the physical body with the forehead. Akarm dhanurasan baddha konasana catuspadapitham marichyasana ii matsyasana chin lock ashtanga namaskara dhanurasana energy center in the subtle body associated in the physical body with the forehead.</p>
      </div>
    </section>
  )
}
