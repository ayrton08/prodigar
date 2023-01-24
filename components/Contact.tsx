import { Subtitle, Small, BodyBold } from "../ui/typography/index";
export const Contact = () => {
  return (
    <section className="text-gray-600 bg-[#FEF5E7]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  flex flex-col md:text-left items-center text-center gap-6">
          <Subtitle>¡Ingresa tu mail para saber las novedades!</Subtitle>

          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/3 w-2/4">
              <Small>Email</Small>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full mt-2 h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex h-11 items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <BodyBold>Enviar</BodyBold>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
