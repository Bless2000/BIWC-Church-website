import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Added for Navbar
import { FaBars, FaTimes } from 'react-icons/fa'; // Added for Navbar

import 'swiper/css';
import 'swiper/css/effect-fade';

import { data } from '../data/heroData';
import biwcLogo from '../assets/img/biwc-logo.jpeg'; // Added for Navbar

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
  const [nav, setNav] = useState(false); // Added for Navbar

  const handleClick = () => setNav(!nav); // Added for Navbar

  return (
    <section aria-label="Hero" className="relative"> {/* Added relative for Navbar positioning */}
      <nav
        className="absolute top-0 left-0 z-50 w-full h-[80px] flex items-center justify-around px-4 bg-transparent text-white"
      >
        {/* Logo */}
        <div>
          <img src={biwcLogo} alt="BIWC Logo" className="w-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 items-center justify-around max-w-4xl">
          <li>
            <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/">Home</Link>
          </li>
          <li>
            <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/auxiliaries">Auxiliaries</Link>
          </li>
          <li>
            <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/ministries">Ministries</Link>
          </li>
          <li>
            <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/media">Media</Link>
          </li>
          <li>
            <Link className="font-extrabold drop-shadow-sm hover:text-[color:var(--primary)] transition-colors" to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-50 text-2xl drop-shadow-sm">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-blue-900 text-white flex flex-col justify-center items-center md:hidden'
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/about">
              About Us
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/auxiliaries">
              Auxiliaries
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/ministries">
              Ministries
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/media">
              Media
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

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
