# @react-element/delay-load

> `delay-load` 组件用于降低组件加载优先级

[![NPM](https://img.shields.io/npm/v/@react-element/delay-load.svg)](https://www.npmjs.com/package/@react-element/delay-load) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @react-element/delay-load
```

## Usage

```tsx
import * as React from 'react'

import MyComponent from '@react-element/delay-load'

class Example extends React.Component {
  render () {
    return (
      <DelayLoad>
        <img src="path/to/img.png" />
      </DelayLoad>
    )
  }
}
```

## Props

```ts
type Props = {
  children: React.ReactNode;
  delay?: number;
  resolve?: boolean;
  disable?: boolean;
}
```

- children - 待渲染组件, 该组件必须为 React.Children.only
- delay - 延迟加载, 单位: ms
- resolve - 是否已经加载, 当当前组件 resolve 后, 不再重复 delay
- disable - 是否禁用直接返回 children

## License

MIT © [jf3096](https://github.com/jf3096)
