import { Title } from "../ui/typography/index";
import { Information } from "./Information";
import { ReportForm } from "./ReportForm";

export const PostPreview = () => {
  return (
    <section className=" w-full p-4 flex flex-col items-center md:flex-row text-[#2C3E50] justify-evenly bg-[#FEF5E7]" id="post">
      <div className="max-w-[600px] lg:w-[800px] md:w-1/2 md:px-20 py-8 flex flex-col justify-between gap-10">
        <Title>Publica objetos o pertenencias que ya no usas</Title>
        <div className=" p-3 rounded-md bg-slate-500 bg-opacity-10 shadow-md">
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
      </div>
    </section>
  );
};