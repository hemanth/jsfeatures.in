import React from 'react';
import mui, { AppBar, FlatButton } from 'material-ui';
import BaseComponent from './components/base.js'
import FeatureTabs from './components/feature-tabs.js'

class JSfeatures extends BaseComponent {
  constructor () {
    super()
  }
  render () {
    return (<div>
        <AppBar showMenuIconButton={false} title="JSfeatures IN" iconElementRight={<FlatButton label="Save" />} />
        <div style={{'paddingTop':10}}/>
        <FeatureTabs />
        <AppBar showMenuIconButton={false} title="Copyright © 2015 - Hemanth.HM" />
    </div>);
  }
}

React.render(<JSfeatures />, document.querySelector('#content'))
