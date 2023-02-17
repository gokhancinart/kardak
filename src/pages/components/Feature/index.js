/* eslint-disable @next/next/no-img-element */

export default function Feature() {

  return (
    <div className="bg-gray-100 py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Standart - Customized - BIO </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Paper cups for all your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our cups are liquid-tight and sturdy, allowing you to enjoy your hot or cold beverages wherever you go.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            
            <div className="relative">
              <img src="/images/paperCup.png" alt="Paper Cup" className="w-full " />
              <dt className="text-lg text-center font-semibold leading-8 tracking-tight text-indigo-600">
                Standart Paper Cups
              </dt>
              <dd className="mt-2 text-base text-center leading-6 text-gray-600">
                Standart kağıt bardaklar, herhangi bir sosyal etkinlik veya toplantıda kullanım için idealdir ve kolayca elde edilebilen uygun fiyatlı bir seçenektir.
              </dd>
            </div>

            <div className="relative">
              <img src="/images/paperCup.png" alt="Paper Cup" className="w-full " />
              <dt className="text-lg text-center font-semibold leading-8 tracking-tight text-indigo-600">
                Customized Paper Cups
              </dt>
              <dd className="mt-2 text-base text-center leading-6 text-gray-600">
                Kişiselleştirilmiş kağıt bardaklar, markanızın veya etkinliğinizin tanıtımı için harika bir fırsat sunar. Logonuz veya özel mesajınız, müşterilerinize veya misafirlerinize markanızın özgünlüğünü ve profesyonelliğini gösterir.
              </dd>
            </div>

            <div className="relative">
              <img src="/images/paperCup.png" alt="Paper Cup" className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              <dt className="text-lg text-center font-semibold leading-8 tracking-tight text-indigo-600">
                BIO Paper Cups
              </dt>
              <dd className="mt-2 text-base text-center leading-6 text-gray-600">
                BIO kağıt bardaklar, doğaya dost malzemeler kullanılarak üretilmiştir ve çevreye zarar vermez. Bu bardaklar, çevre dostu bir seçenek arayan herkes için mükemmel bir seçimdir.
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  )
}