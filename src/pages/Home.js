/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Carousel,
} from 'antd';
import {
  CarouselButtons,
  Initial,
  About,
  Skills,
  Experiences,
  Contacts
} from '../components';
import { detectMouseWheelDirection } from '../util';

const Home = () => {
  const [carouselRef, setCarouselRef] = useState();
  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      const direction = detectMouseWheelDirection(e);
      if(carouselRef) {
        if (direction === 'down') carouselRef.next();
        if (direction === 'up') carouselRef.prev();
      }
    });
  }, [carouselRef]);
  return (
    <>
      <CarouselButtons carousel={carouselRef} />
      <Carousel
        infinite
        speed={300}
        ref={(c) => { setCarouselRef(c); }}
      >
        <div>
          <Initial />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Experiences />
        </div>
        <div>
          <Contacts />
        </div>
      </Carousel>
    </>
  );
}

export default Home;