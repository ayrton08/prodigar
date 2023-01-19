import Image from "next/image";
import post from "../public/post.svg";
import { ContainerPreview } from "../ui/containers/styled";

export const PostPreview = () => {
  return (
    <section className=" w-full p-4 flex flex-col items-center md:flex-row text-[#2C3E50] justify-evenly bg-[#FEF5E7]">
      <div className="max-w-[600px] lg:w-[800px] md:w-1/2 md:px-20 py-8 flex flex-col justify-between gap-10">
        <h4 className="font-sans font-bold text-4xl lg:text-6xl">
          Publica objetos o pertenencias que ya no usas
        </h4>
        <span className="text-xl font-sans lg:text-2xl">
          Desde cualquier lugar podras publicar objetos o pertenencias que
          pueden ser utiles a otra persona. En esta publicacion podras incluir
          una o varias fotos sobre la pertenencia.
        </span>
      </div>
      <div className="flex container__image max-w-[400px] md:max-w-[500px] p-5 md:p-16 md:my-8 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 rounded-2xl shadow-lg shadow-black/50">
        <Image
          src={post}
          alt=""
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] zoom"
          priority
        />
      </div>
    </section>
  );
};
