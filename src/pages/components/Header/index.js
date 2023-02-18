/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { 
    name: 'Home', 
    activeSection: 'Promo', 
    href: '#promo', 
    current: true 
  },
  { 
    name: 'Products',
    activeSection: 'Products',  
    href: '#products', 
    current: false 
  },
  { 
    name: 'Product Types', 
    activeSection: 'Feature', 
    href: '#feature', 
    current: false 
  },
  { 
    name: 'Contact', 
    activeSection: 'ContactUs', 
    href: '#contactus', 
    current: false 
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example( {dataId} ) {

  const [activeSection, setActiveSection] = useState('promo');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    function handleScroll () {
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        console.log(activeSection)
        if (
          scrollPosition > sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, [activeSection]);

  return (
    <Disclosure data-id={dataId} as="nav" className="bg-gray-800 sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className='block h-8 w-auto lg:hidden text-white font-black'>KÜRTDAK</div>
                  <div className='hidden w-auto lg:block text-white font-black'>
                    <Link href='/'>
                      KARDAK
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={ activeSection === item.activeSection.toLowerCase() ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' }
                        aria-current={item.current ? 'page' : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          const target = document.querySelector(`#${item.activeSection.toLowerCase()}`);
                          target.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 mr-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <img src='/images/flags/usa.png' alt='usa' className='w-6 h-6' />
                </button>
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 mr-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <img src='/images/flags/tr.png' alt='usa' className='w-6 h-6' />
                </button>
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <img src='/images/flags/russia.png' alt='usa' className='w-6 h-6' />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}