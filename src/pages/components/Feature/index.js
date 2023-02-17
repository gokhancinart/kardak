/* eslint-disable @next/next/no-img-element */
const callouts = [
  {
    name: 'Standart Paper Cups',
    description: 'Standard paper cups are ideal for use in any social event or meeting, and they are an easily accessible and affordable option. They are a popular choice for many businesses due to their versatility and low cost.',
    imageSrc: 'https://images.pexels.com/photos/1371628/pexels-photo-1371628.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Customized Paper Cups',
    description: 'Customized paper cups provide a great opportunity to promote your brand or event. Your logo or special message showcases the uniqueness and professionalism of your brand to your customers or guests.',
    imageSrc: 'https://images.pexels.com/photos/209428/pexels-photo-209428.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'BIO Paper Cups',
    description: 'BIO paper cups are made with environmentally friendly materials and do not harm the environment. These cups are a perfect choice for anyone looking for an eco-friendly option.',
    imageSrc: 'https://images.pexels.com/photos/849646/pexels-photo-849646.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
export default function Feature() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Product Types</h3>
          <h2 className="text-2xl font-bold text-gray-900">Versatile Cups for Every Need with Our Wide Range of Products</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 mb-1 text-md font-bold text-indigo-600">
                  {callout.name}
                </h3>
                <p className="text-sm text-gray-500">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}