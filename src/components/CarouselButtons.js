import React from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CarouselButtons = ({ carousel }) => {
  return (
    <div id="carousel-buttons">
      {/* <Tooltip title={prev}> */}
      <Button size="large" type="primary" shape="circle" icon={<LeftOutlined />} onClick={() => { carousel.prev(); }} />
      {/* </Tooltip> */}
      {/* <Tooltip title={next}> */}
      <Button size="large" type="primary" shape="circle" icon={<RightOutlined />} onClick={() => { carousel.next(); }} />
      {/* </Tooltip> */}
    </div>
  );
}

export default CarouselButtons;