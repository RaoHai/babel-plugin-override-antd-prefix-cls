Read babel plugin handbook -> https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md

Try http://astexplorer.net/#/Pcw9baefXI for a visual understanding.

# babel-plugin-boilerplate

Add a description for the plugin here

## Example

**In**

```jsx
import { Button } from 'antd';
import React from 'react';

class App extends React.Component {
  render() {
    <Button> hello world </Button>
  }
}

```

**Out**

```jsx
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

```

## Installation

```sh
$ npm install babel-plugin-override-antd-prefix-cls
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-override-antd-prefix-cls"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-override-antd-prefix-cls script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-override-antd-prefix-cls"]
});
```
