import React, { Component } from 'react'
import { withRouteData, Head } from 'react-static'
import Wa from 'react-icons/lib/io/social-whatsapp-outline';
import TagManager from 'react-gtm-module'
import { Parallax } from 'react-parallax';
import withResizeDetector from '../hoc/withResizeDetector';
import { GTM_ID  } from '../helpers/constants'

import seo from '../img/seo-img.jpg';

class Home extends Component {

  componentDidMount() {
    // TagManager.initialize({ gtmId: GTM_ID });
  }

  render() {
    const { width } = this.props;
    const bgImage = width ? width < 500 ? require('img/3.1.jpg') : require('img/3.jpg') : undefined;
    
    return (
      <div className="home">
        <Head>
          <title>Write Code</title>
          <meta
            name="description"
            content="Somos empresa de tecnología especializada en descifrar tu idea de negocio y llevarla a la vida real."
          />
          <meta property="og:locale" content="es_MX" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Write Code" />
          <meta property="og:site_name" content="Write Code" />
          <meta property="og:description" content="Somos empresa de tecnología especializada en descifrar tu idea de negocio y llevarla a la vida real." />
          <meta property="og:image" content={seo} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Write Code" />
          <meta name="twitter:description" content="Somos empresa de tecnología especializada en descifrar tu idea de negocio y llevarla a la vida real." />
          <meta name="twitter:image:src" content={seo} />
        </Head>
        <Parallax bgImage={ bgImage } strength={ 350 } >
          <div className="home-hero">
            <h1>Vivimos en una era tecnológica y nosotros somos expertos listos para ayudarte con tus ideas. </h1>
          </div>
          <div className="triangle" />
        </Parallax>
        <div className="home-items">
          <div className="home-card">
            <img width="250px" src={ require('../img/analysis.jpg')} alt="" />
            <div className="card">
              <h2 className="card__title">ANÁLISIS</h2>
              <p className="card__description">Analizamos tu proyecto con nuestro método <a href="/ssadef">SSADEF</a>, hacemos el diseño y planeación que resulte más favorable y económica para tu idea de negocio</p>
            </div>
          </div>
          <div className="home-card">
            <img width="250px" src={ require('../img/web.jpg')} alt="" />
            <div className="card">
              <h2 className="card__title">DESARROLLO WEB</h2>
              <p className="card__description">Desde un landing page hasta una aplicación escalable con tecnologías de vanguardia como React.js</p>
            </div>
          </div>
          <div className="home-card">
            <img width="250px" src={ require('../img/seo.jpg')} alt="" />
            <div className="card">
              <h2 className="card__title">SEO</h2>
              <p className="card__description">Mejoramos tu posicionamiento con herramientas como Google Tag Manager, Analytics, Facebook Ads y más</p>
            </div>
          </div>
          <div className="home-card">
            <img width="250px" src={ require('../img/mobile.jpg')} alt="" />
            <div className="card">
              <h2 className="card__title">MOBILE APPS</h2>
              <p className="card__description">Desarrollo de aplicaciónes bridge con React Native</p>
            </div>
          </div>
          <div className="home-card">
              <img width="250px" src={ require('../img/data_science.jpg')} alt="" />
              <div className="card">
                <h2 className="card__title">DATA SCIENCE</h2>
                <p className="card__description">Análisis de grandes cantidades de datos para entender comportamientos y toma de decisiones</p>
              </div>
            </div>
          </div>
        <div className="whatsapp">
          <a href="https://wa.me/525513099220">
            <Wa className="whatsapp__icon" color="#9bbf00"/>
            <span>Evia un mensaje</span>
          </a>
        </div>
      </div>
    );
  }
}

export default withRouteData(withResizeDetector(Home));