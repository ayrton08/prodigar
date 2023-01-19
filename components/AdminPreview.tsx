import Image from "next/image";
import admin from "../public/admin.svg";
import { ContainerPreview } from "../ui/containers/styled";
import { Title, Paragraph } from "../ui/label/styled";

export const AdminPreview = () => {
  return (
    <section className=" w-full p-4 flex flex-col items-center md:flex-row-reverse text-[#2C3E50] justify-evenly bg-[#FEF5E7]">
      <div className="max-w-[600px] lg:w-[800px] md:w-1/2 md:px-20 py-8 flex flex-col justify-between gap-10">
        <Title>Administra tus posteos realizados</Title>
        <Paragraph>
          Desde cualquier lugar podras publicar objetos o pertenencias que
          pueden ser utiles a otra persona. En esta publicacion podras incluir
          una o varias fotos sobre la pertenencia.
        </Paragraph>
      </div>
      <div className="flex container__image max-w-[400px] md:max-w-[500px] p-5 md:p-16 md:my-8 bg-gradient-to-br from-amber-400 via-amber-200 to-amber-400 rounded-2xl shadow-lg shadow-black/50">
        <Image src={admin} alt="" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] zoom" />
      </div>
    </section>
  );
};
