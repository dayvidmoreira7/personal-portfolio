import React from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CarouselButtons = ({ carousel }) => {
  return (
    <div id="carousel-buttons">
      <Button size="large" type="primary" shape="circle" icon={<LeftOutlined />} onClick={() => { carousel.prev(); }} />
      <Button size="large" type="primary" shape="circle" icon={<RightOutlined />} onClick={() => { carousel.next(); }} />
    </div>
  );
}

export default CarouselButtons;