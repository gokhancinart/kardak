import { FaMapMarkedAlt, FaPhoneSquareAlt } from 'react-icons/fa'
export default function Stats() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white divide-x">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold bg-indigo-600 text-white rounded-md px-3 py-2">
              <FaMapMarkedAlt className='w-6'/>
            </dt>
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">developers</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold bg-indigo-600 text-white rounded-md px-3 py-2">
              <FaPhoneSquareAlt className='w-6'/>
            </dt>
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">contributors</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">organizations</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}