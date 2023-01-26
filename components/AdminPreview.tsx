import { Title } from "../ui/typography";
import { AdminForm } from "./AdminForm";
import { Information } from "./Information";

export const AdminPreview = () => {
  return (
    <section className=" w-full p-4 flex flex-col items-center md:flex-row-reverse text-[#2C3E50] justify-evenly bg-[#FEF5E7]" id="admin">
      <div className="max-w-[600px] lg:w-[800px] md:w-1/2 md:px-10 py-8 flex flex-col justify-between gap-10">
        <Title>Administra tus posteos realizados</Title>
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
        <AdminForm></AdminForm>
      </div>
    </section>
  );
};
