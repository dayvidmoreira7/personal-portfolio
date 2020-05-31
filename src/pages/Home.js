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
        // appendDots={(dots) => (
        //   <div>
        //     <div
        //       style={{
        //         position: 'absolute',
        //         transform: 'translateY(-34px)',
        //         color: 'white',
        //         backgroundColor: '#009900',
        //         width: 114,
        //         height: 24,
        //         borderRadius: 8,
        //         boxShadow: '0px 0px 6px 1px #00000088',
        //         display: 'flex',
        //         justifyContent: 'center',
        //       }}
        //     >
        //       Experiências
        //     </div>
        //     {dots}
        //   </div>
        // )}
        infinite
        slidesToShow={1}
        centerPadding="120px"
        centerMode
        speed={500}
        ref={(c) => { setCarouselRef(c); }}
      >
        <Initial />
        <About />
        <Skills />
        <Experiences />
        <Contacts />
      </Carousel>
    </>
  );
}

export default Home;