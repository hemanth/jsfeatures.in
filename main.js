import React from 'react';
import mui, { AppBar } from 'material-ui';
import BaseComponent from './components/base.js'
import FeatureTabs from './components/feature-tabs.js'

class JSfeatures extends BaseComponent {
  constructor () {
    super()
  }
  render () {
    return <div>
        <AppBar showMenuIconButton={false} title="JSfeatures IN.....coming soon!" />
        <img src="http://33.media.tumblr.com/5e0cc26f0166d9fae90c6e015582117a/tumblr_n7w5d0l8Cc1qiywueo3_500.gif"
            alt="Backyard Banditry"
            style={{ position: 'absolute',margin: 'auto',top: 0,left: 0,right: 0,bottom: 0}}/>
        < hr/>
        <FeatureTabs />
    </div>
  }
}

React.render(<JSfeatures />, document.querySelector('#content'))
