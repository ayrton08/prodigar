import Image from "next/image";
import post from "../public/post.svg";
import { Title, Large } from "../ui/typography/index";
import { AdminForm } from "./AdminForm";
import { Information } from "./Information";
import { ReportForm } from "./ReportForm";

export const PostPreview = () => {
  return (
    <section className=" w-full px-6 sm:px-16  gap-20 p-4 flex flex-col items-center lg:flex-row-reverse text-[#2C3E50] justify-evenly">
      <div className="w-[600px] px-auto py-8 flex flex-col justify-between gap-10 ">
        <Title>Publica objetos o pertenencias que ya no usas</Title>
        <div className="glass-efect p-3 rounded-md">
          <Information title="Informacion Personal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus minus quod quam aperiam cumque illo deserunt rerum
            facere dolore tenetur magni, tempora ut iusto quis mollitia
            perferendis rem vel alias.
          </Information>
          <Information title="Ubicacion">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus minus quod quam aperiam cumque illo deserunt rerum
            facere dolore tenetur magni, tempora ut iusto quis mollitia
            perferendis rem vel alias.
          </Information>
          <Information title="Imagen">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus minus quod quam aperiam cumque illo deserunt rerum
            facere dolore tenetur magni, tempora ut iusto quis mollitia
            perferendis rem vel alias.
          </Information>
        </div>
      </div>
      <div className="card__admin glass-efect">
        <ReportForm />
        {/* <AdminForm></AdminForm> */}
      </div>
    </section>
  );
};
