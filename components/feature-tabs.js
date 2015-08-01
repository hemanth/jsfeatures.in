import React from 'react';
import BaseComponent from './base.js';
import mui, { Tab, Tabs } from 'material-ui';

class FeatureTabs extends BaseComponent {
  constructor () {
    super()
  }
  render () {
    return <div>
        <Tabs>
            <Tab label="ES7/ES2016">
            ES2016
            </Tab>
            <Tab label="ES6/ES2015">
            ES2015
            </Tab>
            <Tab label="ES5">
            ES2015
            </Tab>
        </Tabs>
    </div>
  }
}

export default FeatureTabs;
