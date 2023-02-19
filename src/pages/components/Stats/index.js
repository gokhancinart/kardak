import { FaMapMarkedAlt, FaPhoneSquareAlt, FaBusinessTime } from 'react-icons/fa'
export default function Stats({ position, background, paddingMobile, paddingDesktop }) {

  const stats = [
    {
      id: 1,
      name: 'Maltepe, Davutpaşa Cd. No:15, 34010 Zeytinburnu/İstanbul',
      value: 'Our address',
      icon: <FaMapMarkedAlt className='bg-indigo-500 text-white p-2 text-4xl rounded-md' />
    },
    {
      id: 2,
      name: 'Tel : 0537 858 00 00',
      name2: 'Email : info@kardak.com',
      value: 'You can reach us by phone',
      icon: <FaPhoneSquareAlt className='bg-indigo-500 text-white p-2 text-4xl rounded-md' />
    },
    {
      id: 3,
      name: 'Pazartesi - Cuma: 08:00 - 20:00',
      name2: 'Cumartesi: 08:00 - 13:00',
      value: 'Our working hours',
      icon: <FaBusinessTime className='bg-indigo-500 text-white p-2 text-4xl rounded-md' />
    },
  ]

  return (
    <div className={background}>
      <div className={`${paddingMobile} ${paddingDesktop}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className={`grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-${position}`}>
            {stats.map((stat) => (
              <div key={stat.id} className="sm:mx-auto flex max-w-xs flex-row gap-y-4 w-full">
                <dd className="order-first text-3xl font-bold tracking-tight text-indigo-500 sm:text-xl flex">
                  <span className='mt-1'>{stat.icon}</span>
                </dd>
                <dt className="text-sm leading-5 text-gray-600 text-left pl-3">
                  <span className='order-first text-xl font-bold tracking-tight text-indigo-500 sm:text-xl flex'>{stat.value}</span>
                  <div className='flex flex-col '>
                    <div>{stat.name}</div>
                    <div>{stat.name2 ? stat.name2 : ''}</div>
                  </div>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}