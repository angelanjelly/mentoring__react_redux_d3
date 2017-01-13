import { Component } from 'react';
import ReactFauxDOM from 'react-faux-dom';

import d3Map from '../d3-components/map';

class Map extends Component {
  render() {
    /*
    How to mount the D3 component and return it from this `render()` function?
    */
    const root = ReactFauxDOM.createElement('svg');
    d3Map(root, this.props.points);
    return root.toReact();
  }
}

export default Map;
