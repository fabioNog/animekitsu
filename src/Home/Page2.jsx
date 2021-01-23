import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QRCode from 'qrcode.react';
import { Row, Col } from 'antd';
import { page2 } from './data';

/* Axios */
import axios from 'axios';

export default class Page2 extends React.Component {
  state = {
    persons: []
  }
  
  
  componentDidMount() {
    axios.get(`https://kitsu.io/api/edge/anime`)
      .then(res => {
        console.log(res.data)
        const persons = res.data;
        this.setState({ persons });
      })
      
  }

  render() {
    
    const children = page2.map((d, i) => {
      if (i > 2) {
        return null;
      }
      return (
        <Col key={i} className="col" span={8}>
          <div className="content-wrapper home-hover">
            <div className="image" style={{ backgroundImage: `url(${d.image})` }} />
            <div className="code-wrapper">
              <h4>Confira</h4>
            </div>
          </div>
        </Col>);
    });
  return (
    <div id="anime" className="home-layout-wrapper home-case-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-case" type="bottom" key="home-case" ease="easeOutQuart" leaveReverse>
          <h2 key="h2">Escolha seu anime</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>);
  }
}
