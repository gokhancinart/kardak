import { FaMapMarkedAlt, FaPhoneSquareAlt } from 'react-icons/fa'
export default function Stats() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="flex justify-center sm:grid max-w-screen-md gap-8 sm:gap-3 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white sm:divide-x ">
          <div className="flex flex-col items-center justify-start sm:justify-center sm:flex-row">
            <dt className="text-1xl md:text-3xl font-extrabold bg-indigo-600 text-white rounded-md px-1 sm:px-3 py-2">
              <FaMapMarkedAlt className='w-6'/>
            </dt>
            <div className='grid mt-1 sm:ml-2'>
              <dt className="text-1xl md:text-2xl font-extrabold">Adress</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">developers</dd>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start sm:justify-center sm:flex-row">
            <dt className="text-1xl md:text-3xl font-extrabold bg-indigo-600 text-white rounded-md px-1 sm:px-3 py-2">
              <FaMapMarkedAlt className='w-6'/>
            </dt>
            <div className='grid mt-1 sm:ml-2'>
              <dt className="text-1xl md:text-2xl font-extrabold">Adress</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">developers</dd>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start sm:justify-center sm:flex-row">
            <dt className="text-1xl md:text-3xl font-extrabold bg-indigo-600 text-white rounded-md px-1 sm:px-3 py-2">
              <FaMapMarkedAlt className='w-6'/>
            </dt>
            <div className='grid mt-1 sm:ml-2'>
              <dt className="text-1xl md:text-2xl font-extrabold">Adress</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">developers</dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}