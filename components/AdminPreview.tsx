import Image from "next/image";
import admin from "../public/admin.svg";
import { Title, Large } from "../ui/typography";

export const AdminPreview = () => {
  return (
    <section className=" w-full p-4 flex flex-col items-center md:flex-row-reverse text-[#2C3E50] justify-evenly bg-[#FEF5E7]" id="admin">
      <div className="max-w-[600px] lg:w-[800px] md:w-1/2 md:px-20 py-8 flex flex-col justify-between gap-10">
        <Title>Administra tus posteos realizados</Title>
        <Large>
          Desde cualquier lugar podras publicar objetos o pertenencias que
          pueden ser utiles a otra persona. En esta publicacion podras incluir
          una o varias fotos sobre la pertenencia.
        </Large>
      </div>
      <div className="card__admin">
        <Image src={admin} alt="" className="img zoom" />
      </div>
    </section>
  );
};
