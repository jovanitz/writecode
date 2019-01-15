import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import { Trail } from 'react-spring'
import { v4 } from 'uuid';

const items = [
  { key: v4(), name: 'home-img1' },
  { key: v4(), name: 'home-img2' },
  { key: v4(), name: 'home-img3' }
];

class Fisio extends Component {
  render() {
    return (
      <div className="home">
        <Trail
          items={items} keys={item => item.key}
          from={{ transform: 'translate3d(0,-200px,0)', opacity: .25 }}
          to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}>
          { item => props => <div style={props} className={ item.name } ></div> }
        </Trail>
      </div>
    );
  }
}

export default withRouteData(Fisio);