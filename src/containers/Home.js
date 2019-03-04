import React, { Component } from 'react'
import { withRouteData, Head } from 'react-static'
import { Trail } from 'react-spring'
import { v4 } from 'uuid';
import TagManager from 'react-gtm-module'
import { GTM_ID  } from '../helpers/constants'
import Wa from 'react-icons/lib/io/social-whatsapp-outline';

const items = [
  {
    key: v4(),
    img: 'home-img1',
    data: {
      title: 'CONSULTA',
      description: 'Un profesional identifica la lesión, se hace una revision'
    }
  },
  {
    key: v4(),
    img: 'home-img2',
    data: {
      title: 'TERAPIA',
      description: 'Tratamiento de acuerdo a las necesidades del paciente mediante técnicas tales como la aplicación de láser, ultrasonido, corrientes interferenciales, masoterapia, crioterapia y más.'
    }
  },
  {
    key: v4(),
    img: 'home-img3',
    data: {
      title: 'RECUPERACIÓN',
      description: 'Recuperate y disfruta disfruta del placer de moverte. Si eres un atleta prepárate para entrenar al máximo. No te limites!'
    }
  },
];

const Title = ({ title, description } = {}) => <div className="steep">
    <div className="steep__title">{ title }</div>
    <div className="steep__description">{ description }</div>
  </div>;

class Fisio extends Component {

  componentDidMount() {
    TagManager.initialize({ gtmId: GTM_ID });
  }

  render() {
    return (
      <div className="home">
        <Head>
          <title>FisioFit</title>
          <meta
            name="description"
            content="Recupera el movimiento con fisioterapia y electroestimulación."
          />
        </Head>
        <div className="bg-img bg-img--1" >
          <div className="hero">
            <h1>Vivimos en una era tecnológica y nosotros somos expertos listos para ayudarte con tus ideas. </h1>
          </div>
        </div>
        <div className="bg-img bg-img--2" >
          <img width="400px" src={ require('..//img/logo.svg')} alt="" />
          <div className="bg-steep">
            aqui va algo
          </div>
        </div>
        <div className="whatsapp">
          <a href="https://wa.me/525513099220">
            <Wa className="whatsapp__icon" color="#529404"/>
            <span>Evia un mensaje</span>
          </a>
        </div>
      </div>
    );
  }
}

export default withRouteData(Fisio);