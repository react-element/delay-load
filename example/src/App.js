import React, { Component } from 'react';

import DelayLoad from '@react-element/delay-load';

export default class App extends Component {
  render() {
    return (
      <DelayLoad delay={2000}>
        <img src="//jx3.xoyo.com/zt/2018/05/04/page/assets/images/page3/badao/bg.jpg"/>
      </DelayLoad>
    );
  }
}
