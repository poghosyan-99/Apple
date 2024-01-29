import React, { useState, useEffect } from 'react';
import './style.css';
import { Images } from './images/index';

const Section6 = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(0);
  const max = Images.length;

  const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1);

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  }, [active, autoplay, max]);

  const toggleAutoPlay = () => setAutoplay(!autoplay);

  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = (value) => (active === value ? 'active' : '');

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: `${Images.length * 100}%`,
      transform: `translateX(${transition}vw)`,
    };
  };

  const renderSlides = () =>
    Images.map((item, index) => (
      <div className={`each-slide ${isActive(index)}`} key={index}>
        <img src={item.img} alt={item.alt} />
      </div>
    ));

  const renderDots = () =>
    Images.map((item, index) => (
      <li className={`${isActive(index)} dots`} key={index}>
        <button onClick={() => setActive(index)}>
          <span>&#9679;</span>
        </button>
      </li>
    ));

  const renderPlayStop = () =>
    autoplay ? (
      <svg fill='#333' height='40' viewBox='0 0 24 24' width='40'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' />
      </svg>
    ) : (
      <svg fill='#333' height='40' viewBox='0 0 24 24' width='40'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' />
      </svg>
    );

  const renderArrows = () => (
    <React.Fragment>
      <button type='button' className='arrows prev' onClick={() => prevOne()}>
        <svg fill='#ccc' width='70' height='70' viewBox='0 0 20 20'>
          <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
          <path d='M0 0h24v24H0z' fill='none' />
        </svg>
      </button>
      <button type='button' className='arrows next' onClick={() => nextOne()}>
        <svg fill='#ccc' width='70' height='70' viewBox='0 0 20 20'>
          <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
          <path d='M0 0h24v24H0z' fill='none' />
        </svg>
      </button>
    </React.Fragment>
  );

  return (
    <section className='slider'>
      <div className='wrapper' style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
      <ul className='dots-container'>{renderDots()}</ul>
      <button type='button' className='toggle-play' onClick={toggleAutoPlay}>
        {renderPlayStop()}
      </button>
    </section>
  );
};

export default Section6;
