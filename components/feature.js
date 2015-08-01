import React from 'react';
import BaseComponent from './base.js';
import {Paper} from 'material-ui';
import {js_beautify} from 'js-beautify';
import Highlight from 'react-highlight';

import ES6 from '../data/es6.js'

class Feature extends BaseComponent {
  constructor () {
    super()
  }
  render () {
      const h1Style = {
          'paddingBottom': '0.3em',
          'fontSize': '2.25em',
          'lineHeight': '1.2',
          'borderBottom': '1px solid #eee',
          'marginLeft': '7px'
      };
      const features = ES6.map(function(feature) {
          const name = Object.keys(feature)[0];
          // can avoid this beautification step, using it for now.
          const code = js_beautify(feature[name], { indent_size: 2 });
          return (
              <Paper zDepth={1} key={name}>
                 <h1 id={name} style={h1Style}>
                     <a href={'#' + name}
                         style={{'textDecoration': 'none', 'color': '#d30'}}>
                         {name}
                     </a>
                </h1>
                 <Highlight className='js'>
                     {code}
                 </Highlight>
           </Paper>
          )
      });
      return (
          <div>
              {features}
          </div>
      )
  }
}

export default Feature;
