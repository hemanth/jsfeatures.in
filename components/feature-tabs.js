import React from 'react';
import BaseComponent from './base.js';
import Feature from './feature.js';
import mui, { Tab, Tabs } from 'material-ui';

class FeatureTabs extends BaseComponent {
  constructor () {
    super()
  }
  render () {
    // Till material-ui gives an option to update tabIndex programatically.
    const tabIndex = (window.location.href.indexOf("#ES7")>=0 ? 0 :
                      window.location.href.indexOf("#ES6")>=0 ? 1 :
                      window.location.href.indexOf("#ES5")>=0 ? 2 : 0);
    return (<div style={{'width': '1024', 'margin':'auto'}}>
        <Tabs initialSelectedIndex={tabIndex}>
            <Tab label="ES7/ES2016" id="es7">
                <Feature spec='ES7' />
            </Tab>
            <Tab label="ES6/ES2015" id="es6">
                <Feature spec='ES6' />
            </Tab>
            <Tab label="ES5" id="es5">
                <Feature spec='ES5' />
            </Tab>
        </Tabs>
    </div>)
  }
}

export default FeatureTabs;
