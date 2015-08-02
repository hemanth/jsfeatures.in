import React from 'react';
import BaseComponent from './base.js';
import {Paper} from 'material-ui';
import {js_beautify} from 'js-beautify';
import Highlight from 'react-highlight';

import ES6 from '../data/es6.js'
import ES7 from '../data/es7.js'
import ES5 from '../data/es5.js'

const specs = {
    ES5: ES5,
    ES6: ES6,
    ES7: ES7
}
// from https://gist.github.com/mathewbyrne/1280286
const slugify = function(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/\./g, '-')            // Replace dot spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

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
      const features = specs[this.props.spec].map(function(feature) {
          const name = Object.keys(feature)[0];
          // can avoid this beautification step, using it for now.
          const code = js_beautify(feature[name]['code'], { indent_size: 2 });
          const info = feature[name]['info'];

          return (
              <Paper zDepth={1} key={name}>
                 <h1 id={slugify(name)} style={h1Style}>
                     <a href={'#' + slugify(name)}
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
