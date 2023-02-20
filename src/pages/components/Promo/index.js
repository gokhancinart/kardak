/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Stats from '../Stats';
import classes from 'src/app/page.module.css'

export default function Promo({ dataId }) {

  const [scrollTop, setScrollTop] = useState(0);

  function scrollToSection(e) {
    e.preventDefault();
    const target = document.querySelector(`#${e.target.getAttribute('href').replace('#', '')}`);
    target.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const onScroll = (event) => {
      const scrollTop = event.target.documentElement.scrollTop * 0.2;
      setScrollTop(scrollTop);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id={dataId} className="bg-gray-50">
      <div className='relative overflow-hidden'>
        <div className="bg-[url('/images/background/coffie-background.png')] bg-fixed absolute inset-0 opacity-25 sm:opacity-25"></div>
        <div className="pt-16 pb-14 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">
                  Versatile Cups for Every Need with Our Wide Range of Products
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-500">
                By choosing our eco-friendly cups, you're not only reducing your carbon footprint, but also supporting a healthier planet for generations to come.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="hidden sm:grid pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg drop-shadow-lg sm:opacity-0 lg:opacity-100`} style={{ transform: `translateY(-${scrollTop * 1}px)` }}>
                          <Image 
                            src={`/images/cup1.jpg`}
                            alt="paper cup"
                            width={300}
                            height={300}
                            quality={100}
                            priority={true}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg drop-shadow-lg`} style={{ transform: `translateY(-${scrollTop * 0.8}px)` }}>
                          <Image 
                            src={`/images/cup2.jpg`}
                            alt="paper cup"
                            width={300}
                            height={300}
                            quality={100}
                            priority={true}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg drop-shadow-lg`} style={{ transform: `translateY(-${scrollTop * 0.5}px)` }}>
                          <Image 
                            src={`/images/cup3.jpg`}
                            alt="paper cup"
                            width={300}
                            height={300}
                            quality={100}
                            priority={true}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg drop-shadow-lg`} style={{ transform: `translateY(-${scrollTop * 0.7}px)` }}>
                          <Image 
                            src={`/images/starbucks.jpg`}
                            alt="paper cup"
                            width={300}
                            height={300}
                            quality={100}
                            priority={true}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg drop-shadow-lg`} style={{ transform: `translateY(-${scrollTop * 0.9}px)` }}>
                          <Image 
                            src={`/images/thlil.jpg`}
                            alt="paper cup"
                            width={300}
                            height={300}
                            quality={100}
                            priority={true}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg drop-shadow-lg`} style={{ transform: `translateY(-${scrollTop * 1}px)` }}>
                          <Image 
                            src={`/images/cup4.jpg`}
                            alt="paper cup"
                            width={300}
                            height={300}
                            quality={100}
                            priority={true}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg drop-shadow-lg`} style={{ transform: `translateY(-${scrollTop * 1.2}px)` }}>
                          <Image 
                            src={`/images/cup5.jpg`}
                            alt="paper cup"
                            width={300}
                            height={300}
                            quality={100}
                            priority={true}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span
                  className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500">
                  <span
                    className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
                  >
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <a
                    href='#products' 
                    onClick={ scrollToSection }
                    className="text-sm font-medium transition-all group-hover:mr-4">
                    Products
                  </a>
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats 
        background="bg-white"
        position="cols-3"
        paddingMobile="py-14"
        paddingDesktop="sm:py-32"
      />
    </section>
  )
}