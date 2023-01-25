import Image from "next/image";
import post from "../public/post.svg";
import { Title, Large } from "../ui/typography/index";

export const PostPreview = () => {
  return (
    <section className=" w-full p-4 flex flex-col items-center md:flex-row text-[#2C3E50] justify-evenly bg-[#FEF5E7]" id="post">
      <div className="max-w-[600px] lg:w-[800px] md:w-1/2 md:px-20 py-8 flex flex-col justify-between gap-10">
        <Title>Publica objetos o pertenencias que ya no usas</Title>
        <Large className="text-xl font-sans lg:text-2xl">
          Desde cualquier lugar podras publicar objetos o pertenencias que
          pueden ser utiles a otra persona. En esta publicacion podras incluir
          una o varias fotos sobre la pertenencia.
        </Large>
      </div>
      <div className="card__post">
        <Image src={post} alt="" className="img zoom" priority />
      </div>
    </section>
  );
};
