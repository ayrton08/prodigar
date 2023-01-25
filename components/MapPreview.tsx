import Image from "next/image";
import map from "../public/map.svg";
import { Title, Large } from "../ui/typography";

export const MapPreview = () => {
  return (
    <section className=" w-full p-4 flex flex-col items-center md:flex-row-reverse text-[#2C3E50] justify-evenly">
      <div className="card__map">
        <Image src={map} alt="" className="img zoom" />
      </div>
      <div className="max-w-[600px] lg:w-[800px] md:w-1/2 md:px-20 py-8 flex flex-col justify-between gap-10">
        <Title>Da a conocer la ubicación de tus pertenencias</Title>
        <Large>
          En esta sección podrás publicar en el mapa la ubicación de tus
          pertenencias para que sepan donde retirarlas, o buscar donde están
          ubicadas las pertenencias de otras personas.
        </Large>
      </div>
    </section>
  );
};
