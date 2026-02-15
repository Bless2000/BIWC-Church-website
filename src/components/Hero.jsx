import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { data } from '../data/heroData';

const useIsMdUp = () => {
  const getInitialValue = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 768px)').matches;
  };

  const [isMdUp, setIsMdUp] = useState(getInitialValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => setIsMdUp(e.matches);

    // Safari < 14 support
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return isMdUp;
};

const Hero = () => {
  const isMdUp = useIsMdUp();

  return (
    <section aria-label="Hero">
      <Swiper
        spaceBetween={30}
        speed={3000}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {data.map(
          ({
            id,
            colorDeep,
            colorLite,
            mainText,
            subText,
            shadow,
            mobileShadow,
            buttonText,
            img,
          }) => (
            <SwiperSlide
              key={id}
              style={{ backgroundColor: colorLite, backgroundImage: `url(${img})` }}
              className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
            >
              {/* #010112 overlay with ~20% transparency */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, rgba(1, 1, 18, 0.15) 0%, rgba(1, 1, 18, 0.15) 100%)`,
                }}
              />

              <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-[80px] pb-10">
                <div className="max-w-3xl w-full text-center flex flex-col items-center gap-4">
                  <h1 className="font-heading text-5xl lg:text-[90px] font-black leading-tight tracking-tight text-[color:var(--text)] drop-shadow-sm mb-5">
                    {' '}
                    <span style={{ color: colorLite }}>{mainText}!</span>
                  </h1>

                  <p className="leading-normal md:text-2xl text-lg font-black text-[color:var(--bg)] drop-shadow-sm">
                    {subText}
                  </p>

                  <button
                    type="button"
                    className="btn mt-8 text-xl font-black py-4 px-9 focus:outline-none border-0 text-white"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${colorDeep} 98%, transparent)`,
                      // Keep text readable when we reduce opacity
                      color: 'var(--surface-solid)',
                      boxShadow: isMdUp ? shadow : mobileShadow,
                    }}
                  >
                    {buttonText ?? 'Get Started'}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default Hero;
