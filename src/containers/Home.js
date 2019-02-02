import React, { Component } from 'react'
import { withRouteData, Head } from 'react-static'
import { Trail } from 'react-spring'
import { v4 } from 'uuid';
import TagManager from 'react-gtm-module'
import { GTM_ID  } from '../helpers/constants'
import Wa from 'react-icons/lib/io/social-whatsapp-outline';

const items = [
  { key: v4(), name: 'home-img1' },
  { key: v4(), name: 'home-img2' },
  { key: v4(), name: 'home-img3' }
];

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
        <Trail
          items={items} keys={item => item.key}
          from={{ transform: 'translate3d(0,-200px,0)' }}
          to={{ transform: 'translate3d(0,0px,0)' }}>
          { item => props => <div style={props} className={ item.name } ></div> }
        </Trail>
        <div className="whatsapp">
          <a href="https://wa.me/525513099220">
            <Wa width="70px" height="70px" color="green"/>
            <span>Evia un mensaje</span>
          </a>
        </div>
      </div>
    );
  }
}

export default withRouteData(Fisio);