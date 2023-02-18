/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: '7 Oz Paper Cup',
    href: '#',
    imageSrc: 'https://www.ayguncup.com/img/proser-m/7oz-karton-bardak-01-02a4af74.jpg',
    imageAlt: "Paper Cup.",
    price: '$35',
    cc: '180 cc',
  },
  {
    id: 2,
    name: '7 Oz Paper Cup',
    href: '#',
    imageSrc: 'https://www.ayguncup.com/img/proser-m/7oz-karton-bardak-02-03e795ab.jpg',
    imageAlt: "Paper Cup",
    price: '$35',
    cc: '180 cc',
  },
  {
    id: 3,
    name: '7 Oz Paper Cup',
    href: '#',
    imageSrc: 'https://www.ayguncup.com/img/proser-m/7oz-karton-bardak-03-00f346e8.jpg',
    imageAlt: "Paper Cup",
    price: '$35',
    cc: '180 cc',
  },
  {
    id: 4,
    name: '7 Oz Paper Cup',
    href: '#',
    imageSrc: 'https://www.ayguncup.com/img/proser-m/7oz-karton-bardak-04-027e55bd.jpg',
    imageAlt: "Paper Cup",
    price: '$35',
    cc: '180 cc',
  },
]

export default function Products( {dataId} ) {
  return (
    <section id={dataId} className="bg-gray-50 relative">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Product</h3>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Suitable for Any Hot or Cold Beverage</h2>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <Image 
                src={product.imageSrc}
                alt={product.imageAlt}
                width={1000}
                height={1000}
                quality={100}
                priority
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
                {/* <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                /> */}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-700">
                    <Link href={product.href}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.cc}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}