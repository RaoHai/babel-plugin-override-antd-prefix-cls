import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
_Button.defaultProps = Object.assign(_Button.defaultProps || {}, {
  prefixCls: (_Button.defaultProps.prefixCls || '').replace(/ant/g, 'deer')
});

import React from 'react';

class App extends React.Component {
  render() {
    React.createElement(
      _Button,
      null,
      ' hello world '
    );
  }
}
