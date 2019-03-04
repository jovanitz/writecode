import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import Menu from '@material-ui/icons/Menu';
import "animate.css/animate.min.css";
import './main.scss'
import { GTM_ID, GA_ID } from './helpers/constants'

class App extends Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
  }
  
  componentDidMount() {
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
    // TagManager.initialize({ gtmId: GTM_ID });
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
            <div className="logo">
              <img width="110px" src={ require('./img/logo.svg')} alt="" />
            </div>
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
