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
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      const direction = detectMouseWheelDirection(e);
      if(carouselRef) {
        if (direction === 'down') carouselRef.next();
        if (direction === 'up') carouselRef.prev();
      }
    });
    window.addEventListener('resize', () => {
      setMobile(window.innerWidth < 768);
    })
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
        centerPadding={mobile ? null : '120px'}
        centerMode={!mobile}
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