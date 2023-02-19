import Stats from "../Stats";
export default function Contact ( {dataId} ) {
  return (
    <section id={dataId} className="bg-gray-50">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 text-left">Contact Us</h3>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-left">Get in Touch</h2>
        <div className="grid-col-1 grid-row-2 gap-8 lg:grid lg:grid-cols-2 lg:gap-12 mt-6">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96245.22856242837!2d28.7135861690018!3d41.076349928954684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caafe253f39f9b%3A0x349572fb9a436310!2sEsenler%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1676761239795!5m2!1str!2str"
              width="600"
              height="450"
              className="w-full h-96 sm:h-full m-0 rounded-md overflow-hidden"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
          <div>
            <Stats 
            background="bg-transparent"
            position="row-3" 
            paddingMobile="py-14"
            paddingDesktop="sm:py-14"
            />
          </div>
        </div>      
      </div>
    </section>
  );
}