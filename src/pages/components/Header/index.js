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
    name: 'Practical Solution', 
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

  function scrollToSection (e) {
    e.preventDefault();
    const target = document.querySelector(`#${e.target.getAttribute('href').replace('#', '')}`);
    const idSelect = document.querySelector('#promo');
    if (target == idSelect) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    target.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    function handleScroll () {
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
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
                  <div className='flex items-center h-8 w-auto lg:hidden text-white font-black'>KÜRTDAK</div>
                  <div className='hidden w-auto lg:block text-white font-black'>
                    <Link href="/" passHref className='flex items-center'>
                      <span><svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"  viewBox="0 0 24 24"><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"/></svg></span>
                      <span>KARDAK</span>
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
                        onClick={scrollToSection}
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
                    activeSection === item.activeSection.toLowerCase() ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium','block'
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