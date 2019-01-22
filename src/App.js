import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import ScrollAnimation from 'react-animate-on-scroll';
import Menu from '@material-ui/icons/Menu';
import "animate.css/animate.min.css";
import './main.scss'

class App extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
  }
  
  onclick() {
    
  }

  render() {
    const { showMenu } = this.state;
    const classNameNav = showMenu ? 'nav-bg' : 'nav-bg nav-bg--off';
    const classNameContent = showMenu ? 'filter-blur' : '';
    const classNameHamburger = !showMenu ? 'hamburger' : 'hamburger hamburger--off';

    return (
      <Root>
        <div className={ classNameHamburger } onClick={ () => this.setState({ showMenu: true }) }>
          <Menu fontSize="large" />
        </div>
        <div onClick={ () => this.setState({ showMenu: false }) }>
          <ScrollAnimation className={ classNameNav } animateIn="fadeIn">
            <nav>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#inicio">¿Que hacemos?</a></li>
                <li><a href="#inicio">¿Quienes somos?</a></li>
                <li><a href="#inicio">Contacto</a></li>
              </ul>
            </nav>
          </ScrollAnimation>
        </div>
        <div className={ classNameContent }>
          <Routes />
        </div>
      </Root>
    )
  }
}

export default App
