import React, { Component } from 'react'
import { withRouteData, Head } from 'react-static'
import TagManager from 'react-gtm-module'
import Wa from 'react-icons/lib/io/social-whatsapp-outline';
import { GTM_ID  } from '../helpers/constants'
import seo from '../img/seo-img.jpg';

class Method extends Component {

  componentDidMount() {
    TagManager.initialize({ gtmId: GTM_ID });
  }

  render() {
    return (
      <div className="method" >
        <Head>
          <title>Write Code - SSADEF</title>
          <meta
            name="description"
            content="Somos empresa de tecnología especializada en descifrar tu idea de negocio y llevarla a la vida real."
          />
          <meta property="og:locale" content="es_MX" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Write Code - SSADEF" />
          <meta property="og:site_name" content="Write Code - SSADEF" />
          <meta property="og:description" content="Somos empresa de tecnología especializada en descifrar tu idea de negocio y llevarla a la vida real." />
          <meta property="og:image" content={seo} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Write Code - SSADEF" />
          <meta name="twitter:description" content="Somos empresa de tecnología especializada en descifrar tu idea de negocio y llevarla a la vida real." />
          <meta name="twitter:image:src" content={seo} />
        </Head>
        <div className="hero">
          <div className="method-item-title--big">SSADEF</div>
          <div className="method-item">
            <div className="method-item-title">
              <font className="method-item-title--big">S</font>
              <font className="method-item-title">inceridad</font>
            </div>
            <div className="method-item-description">
              Te damos nuestro punto de vista sobre tu idea o negocio. No si es bueno o malo, simplemente a nuestra consideración que tan dificil es ejecutar en la vida real. En temas de lana mas que nada porque para nosotros nada es imposible.
            </div>
          </div>
          <div className="method-item">
            <div className="method-item-title">
              <font className="method-item-title--big">S</font>
              <font className="method-item-title">implicidad</font>
            </div>
            <div className="method-item-description">
              Evaluamos lo mínimo que se requiere para ejecutar una idea o negocio. Y esto es porque al querer hacer todo, terminamos haciendo nada. Es partir nuestra idea en pedacitos, como un LEGO.
            </div>
          </div>
          <div className="method-item">
            <div className="method-item-title">
              <font className="method-item-title--big">A</font>
              <font className="method-item-title">nálisis</font>
            </div>
            <div className="method-item-description">
              Se hace toda la planeación del producto considerando las tecnologías adecuadas,  tiempos y recursos.
            </div>
          </div>
          <div className="method-item">
            <div className="method-item-title">
              <font className="method-item-title--big">D</font>
              <font className="method-item-title">iseño</font>
            </div>
            <div className="method-item-description">
              Hacemos el diseño de la UI/UX totalmente acorde al producto.
            </div>
          </div>
          <div className="method-item">
            <div className="method-item-title">
              <font className="method-item-title--big">E</font>
              <font className="method-item-title">laboración</font>
            </div>
            <div className="method-item-description">
              Se juntan todas las etapas para el desarrollo del producto.
            </div>
          </div>
          <div className="method-item">
            <div className="method-item-title">
              <font className="method-item-title--big">F</font>
              <font className="method-item-title">uturo</font>
            </div>
            <div className="method-item-description">
              Como vemos tu idea de negocio en el futuro. No solo se trata de pensar a corto plazo, los problemas del futuro existen y es mejor estar preparado para ello.
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

export default withRouteData(Method);