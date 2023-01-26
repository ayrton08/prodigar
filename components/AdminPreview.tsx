import { Title } from "../ui/typography";
import { AdminForm } from "./AdminForm";
import { Information } from "./Information";

export const AdminPreview = () => {
  return (
    <section
      className=" w-full p-4 flex flex-col items-center md:flex-row-reverse text-[#2C3E50] justify-evenly bg-[#FEF5E7]"
      id="admin"
    >
      <div className="max-w-[600px] lg:w-[800px] md:w-1/2 md:px-10 py-8 flex flex-col justify-between gap-10">
        <Title>Administra tus posteos realizados</Title>
        <div className=" p-3 rounded-md bg-slate-500 bg-opacity-10 shadow-md">
          <Information title="Tus donaciones">
            Cuando publiques un objeto en donación, podras acceder a esa
            publicacion y ver el estado de la misma.
          </Information>
          <Information title="Editar">
            Podrás editar todas las publicaciones que realices, cambiar la
            ubicación seleccionada o la imagen publicada.
          </Information>
          <Information title="Eliminar">
            También será posible eliminar las publicaciones realizadas.
          </Information>
        </div>
      </div>
      <div className="card__admin glass-efect">
        <AdminForm></AdminForm>
      </div>
    </section>
  );
};
