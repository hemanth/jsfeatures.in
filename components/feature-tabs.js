import React from 'react';
import BaseComponent from './base.js';
import Feature from './feature.js';
import mui, { Tab, Tabs } from 'material-ui';

class FeatureTabs extends BaseComponent {
  constructor () {
    super()
  }
  render () {
    return <div>
        <Tabs>
            <Tab label="ES7/ES2016">
                <Feature spec='ES7' />
            </Tab>
            <Tab label="ES6/ES2015">
                <Feature spec='ES6' />
            </Tab>
            <Tab label="ES5">
                <img src="http://33.media.tumblr.com/5e0cc26f0166d9fae90c6e015582117a/tumblr_n7w5d0l8Cc1qiywueo3_500.gif"
                    alt="Backyard Banditry"
                    style={{ position: 'relative',margin: 'auto',top: 3,left: 0,right: 0,bottom: 0}}/>
            </Tab>
        </Tabs>
    </div>
  }
}

export default FeatureTabs;
