import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';

function withResizeDetector(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        width: 0
      };
    }

    render() {
      const { width } = this.state;
      return <div>
        <ReactResizeDetector handleWidth handleHeight onResize={ width => this.setState({ width })} />
        <WrappedComponent width={ width } />
      </div>
    }
  }
}

export default withResizeDetector;