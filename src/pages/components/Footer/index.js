import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter, FaListUl } from 'react-icons/fa'

export default function Footer({ dataId }) {

  function scrollToSection(e) {
    e.preventDefault();
    const target = document.querySelector(`#${e.target.getAttribute('href').replace('#', '')}`);
    const idSelect = document.querySelector('#promo');
    if (target == idSelect) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    target.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer id={dataId} className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <div onClick={scrollToSection} className='flex items-center text-2xl font-bold tracking-tight text-white sm:text-2xl relative'>
              <a href='#promo' className='absolute inset-0'></a>
              <span><svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24"><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z" /></svg></span>
              <span>KARDAK</span>
            </div>
            {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">KARDAK</h2> */}
            <div className='SocialMedia flex gap-4 mt-4'>
              <div className='bg-blue-500 hover:bg-white rounded-md ease-in duration-200'>
                <Link href="https://www.facebook.com/kardak">
                  <FaFacebookF className="text-white hover:text-blue-500 text-3xl p-2" />
                </Link>
              </div>
              <div className='bg-pink-500 hover:bg-white rounded-md ease-in duration-200'>
                <Link href="https://www.instagram.com/kardak">
                  <FaInstagram className="text-white hover:text-pink-500 text-3xl p-2" />
                </Link>
              </div>
              <div className='bg-blue-400 hover:bg-white rounded-md ease-in duration-200'>
                <Link href="https://twitter.com/kardak">
                  <FaTwitter className="text-white hover:text-blue-400 text-3xl p-2" />
                </Link>
              </div>
            </div>
            <p className="mt-4 text-sm leading-5 text-gray-300">
              Paper cups are a type of packaging used for carrying and serving liquid beverages. Due to their eco-friendly features and ease of use, they have become a popular choice for packaging coffee, tea, cold drinks, and other liquid products.
            </p>
          </div>
          <div className="flex w-full flex-col sm:flex-row items-startmt-2 leading-7 text-white text-sm gap-2 sm:gap-8 justify-end item-start sm:items-end">
            <div>
              <a href="#promo" onClick={scrollToSection}>
                Home
              </a>
            </div>
            <div>
              <a href="#products" onClick={scrollToSection}>
                Products
              </a>
            </div>
            <div>
              <a href="#feature" onClick={scrollToSection}>
                Practical Solutions
              </a>
            </div>
            <div>
              <a href="#contactus" onClick={scrollToSection}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  )
}