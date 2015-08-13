import React from 'react';
import mui, { AppBar, FlatButton, IconButton, Styles} from 'material-ui';
import BaseComponent from './components/base.js'
import FeatureTabs from './components/feature-tabs.js'

let { Colors, Typography } = Styles;

class JSfeatures extends BaseComponent {
  constructor () {
    super()
  }
  render () {
    let githubButton = (
      <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/hemanth/jsfeatures.in"
        linkButton={true} >&#9282;</IconButton>
    );
    return (<div>
        <AppBar showMenuIconButton={false} title="JSfeatures IN" iconElementRight={githubButton}/>
        <div style={{'paddingTop':10}}/>
        <FeatureTabs />
        <p style={{'textAlign': 'center'}}>Copyright © 2015 - <a style={{color: '#ff0000', textDecoration: 'none'}}href="http://h3manth.com">Hemanth.HM</a></p>
    </div>);
  }
}

React.render(<JSfeatures />, document.querySelector('#content'))
