/* eslint-disable @next/next/no-img-element */
const products = [
  {
    id: 1,
    name: 'P.T Coffie',
    href: '#',
    imageSrc: 'https://i.pinimg.com/564x/47/6c/ce/476cce184489e87ad9c0aaa9725f0813.jpg',
    imageAlt: "Paper Cup.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Asahi Coffie',
    href: '#',
    imageSrc: 'https://i.pinimg.com/564x/1a/4e/05/1a4e057adf6f99a7aed9ece8e9b46d33.jpg',
    imageAlt: "Paper Cup",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Blue Coffie',
    href: '#',
    imageSrc: 'https://i.pinimg.com/564x/c9/4d/b8/c94db8816b21ceb03d8a9063b8abd244.jpg',
    imageAlt: "Paper Cup",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: '3D Coffie',
    href: '#',
    imageSrc: 'https://i.pinimg.com/564x/43/4e/f8/434ef8b8841017dc35f39dfc6c357c28.jpg',
    imageAlt: "Paper Cup",
    price: '$35',
    color: 'Black',
  },
]

export default function Products() {
  return (
    <div className="bg-gray-50 relative">
      {/* <div className="bg-[url('/images/background/coffie-background.png')] bg-local md:bg-fixed absolute inset-0 opacity-5"></div> */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Product</h3>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Suitable for Any Hot or Cold Beverage</h2>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}