import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import './TopNav.css'
import {Button} from './Button'

class TopNav extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return (
      <nav className="NavItems">
        <h1 className="nav-logo">Spider Crow Designs</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li><a className={item.cName} href={item.link}>{item.title}</a></li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default TopNav
