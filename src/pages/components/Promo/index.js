/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import classes from 'src/app/page.module.css'
export default function Promo() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (event) => {
      setScrollTop(event.target.documentElement.scrollTop * 0.2);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contribute to the Environment with Our Earth-Friendly Cups
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              By choosing our eco-friendly cups, you're not only reducing your carbon footprint, but also supporting a healthier planet for generations to come.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100`} style={{ transform: `translateY(-${scrollTop * 0.8}px)` }}>
                        <img
                          src="/images/cup1.jpg"
                          alt=""
                          className={`h-full w-full object-cover object-center`}
                        />
                      </div>
                      <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg`} style={{ transform: `translateY(-${scrollTop * 1}px)` }}>
                        <img
                          src="/images/cup2.jpg"
                          alt=""
                          className={`h-full w-full object-cover object-center`}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg`} style={{ transform: `translateY(-${scrollTop * 0.5}px)` }}>
                        <img
                          src="/images/cup3.jpg"
                          alt=""
                          className={`h-full w-full object-cover object-center`}
                        />
                      </div>
                      <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg`} style={{ transform: `translateY(-${scrollTop * 0.7}px)` }}>
                        <img
                          src="/images/starbucks.jpg"
                          alt=""
                          className={`h-full w-full object-cover object-center`}
                        />
                      </div>
                      <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg`} style={{ transform: `translateY(-${scrollTop * 0.9}px)` }}>
                        <img
                          src="/images/thlil.jpg"
                          alt=""
                          className={`h-full w-full object-cover object-center`}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg`} style={{ transform: `translateY(-${scrollTop * 1}px)` }}>
                        <img
                          src="/images/cup4.jpg"
                          alt=""
                          className={`h-full w-full object-cover object-center`}
                        />
                      </div>
                      <div className={`${classes.animateImg} h-64 w-44 overflow-hidden rounded-lg`} style={{ transform: `translateY(-${scrollTop * 1.2}px)` }}>
                        <img
                          src="/images/cup5.jpg"
                          alt=""
                          className={`h-full w-full object-cover object-center`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
              >
                Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}